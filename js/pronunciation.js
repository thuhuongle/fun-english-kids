// ============================================
// PRONUNCIATION MODULE — js/pronunciation.js
// Clear, slow, child-friendly speech for English learning
// Future-ready: replace _browserSpeak() with cloud TTS
// ============================================

const Pronunciation = (() => {
    // ---- Config ----
    const CONFIG = {
        modes: {
            normal: { rate: 0.9, pitch: 1.0, volume: 1.0 },
            slow:   { rate: 0.75, pitch: 1.0, volume: 1.0 }
        },
        preferredLangs: ['en-US', 'en-GB'],
        autoPlayDelay: 500,
        safetyTimeout: 10000,
        // Add commas as pauses between words in sentences for clearer articulation
        sentencePauseChar: ',',
        wordPauseMs: 80
    };

    let _voices = [];
    let _bestVoice = null;
    let _speaking = false;
    let _available = 'speechSynthesis' in window;

    // ---- Voice Selection ----

    function initVoices() {
        if (!_available) return;
        const load = () => {
            _voices = speechSynthesis.getVoices();
            if (_voices.length > 0) {
                _bestVoice = getBestEnglishVoice();
                console.log('[Pronunciation] Voices loaded:', _voices.length);
                if (_bestVoice) {
                    console.log('[Pronunciation] Selected:', _bestVoice.name, '| lang:', _bestVoice.lang, '| local:', _bestVoice.localService, '| female:', _isFemale(_bestVoice), '| natural:', _isNatural(_bestVoice));
                } else {
                    console.warn('[Pronunciation] No suitable voice found, using browser default');
                }
            }
        };
        load();
        speechSynthesis.onvoiceschanged = load;
    }

    // Known low-quality / robotic voices to avoid
    const _lowQualityNames = /espeak|mbrola|pico|flite|festival|cmu_/i;

    function _isHighQuality(v) {
        return !_lowQualityNames.test(v.name);
    }

    // Known male voice names to exclude
    const _maleNames = /male(?!.*female)|david|george|james|daniel|richard|mark|thomas|alex(?!a)|fred|ralph|rishi|lekha|aaron|albert|bruce|carlos|eddy|evan|grandpa|jacques|junior|reed|rocko|sandy|shelley/i;

    function _isFemale(v) {
        // Explicitly female names
        if (/female|woman|samantha|zira|karen|moira|fiona|tessa|veena|victoria|susan|hazel|linda|catherine|kate|serena|allison|ava|nicky|joana|kathy|princess|alice|amelie|anna|carmit|damayanti|ellen|ioana|kyoko|lana|laura|lesya|linh|luciana|majken|mariska|meijia|melina|milena|monica|nora|paulina|sara|satu|sin-ji|tina|xander|yuna|zosia/i.test(v.name)) return true;
        // If name contains male keyword, it's not female
        if (_maleNames.test(v.name)) return false;
        // Google voices without gender in name — treat as acceptable (usually female)
        if (/google/i.test(v.name)) return true;
        return false;
    }

    function _isNatural(v) {
        return /google|natural|neural|enhanced|premium|wavenet/i.test(v.name);
    }

    function getBestEnglishVoice() {
        if (!_voices.length) return null;

        // Filter out low-quality voices first
        const good = _voices.filter(_isHighQuality);
        const pool = good.length > 0 ? good : _voices;

        // Priority order — ALWAYS prefer female voices
        const candidates = [
            // 1. en-US natural female (best quality)
            v => v.lang === 'en-US' && _isNatural(v) && _isFemale(v),
            // 2. en-US female cloud
            v => v.lang === 'en-US' && _isFemale(v) && !v.localService,
            // 3. en-US female local
            v => v.lang === 'en-US' && _isFemale(v),
            // 4. en-GB natural female
            v => v.lang === 'en-GB' && _isNatural(v) && _isFemale(v),
            // 5. en-GB female
            v => v.lang === 'en-GB' && _isFemale(v),
            // 6. any English female
            v => v.lang.startsWith('en-') && _isFemale(v),
            // 7. fallback: en-US natural (any gender, last resort)
            v => v.lang === 'en-US' && _isNatural(v),
            // 8. fallback: any en-US
            v => v.lang === 'en-US',
            // 9. fallback: any English
            v => v.lang.startsWith('en-')
        ];

        for (const test of candidates) {
            const found = pool.find(test);
            if (found) return found;
        }
        return null;
    }

    // ---- Core Speech (browser) ----

    function _browserSpeak(text, mode) {
        return new Promise((resolve) => {
            if (!text || !_available) { resolve(); return; }

            try {
                speechSynthesis.cancel();

                const u = new SpeechSynthesisUtterance(text);
                const settings = CONFIG.modes[mode] || CONFIG.modes.normal;
                u.lang = 'en-US';
                u.rate = settings.rate;
                u.pitch = settings.pitch;
                u.volume = settings.volume;

                const voice = _bestVoice || getBestEnglishVoice();
                if (voice) u.voice = voice;

                _speaking = true;
                _updateUI(true);

                // Safety timeout
                const timeout = setTimeout(() => {
                    _speaking = false;
                    _updateUI(false);
                    resolve();
                }, CONFIG.safetyTimeout);

                u.onend = () => {
                    clearTimeout(timeout);
                    _speaking = false;
                    _updateUI(false);
                    resolve();
                };
                u.onerror = () => {
                    clearTimeout(timeout);
                    _speaking = false;
                    _updateUI(false);
                    resolve();
                };

                speechSynthesis.speak(u);
            } catch (e) {
                console.warn('[Pronunciation] Speech error:', e);
                _speaking = false;
                _updateUI(false);
                resolve();
            }
        });
    }

    // ---- UI Feedback ----

    function _updateUI(isSpeaking) {
        document.querySelectorAll('.btn-speak').forEach(btn => {
            if (isSpeaking) {
                btn.classList.add('speaking');
                btn.disabled = true;
            } else {
                btn.classList.remove('speaking');
                btn.disabled = false;
            }
        });
    }

    // ---- Public API ----

    /** Main speak function — mode: 'normal' | 'slow' */
    function speakText(text, mode = 'normal') {
        if (!_available) {
            console.warn('[Pronunciation] Speech synthesis not supported in this browser');
            return Promise.resolve();
        }
        return _browserSpeak(text, mode);
    }

    /** Speak a sentence with slight pauses between clauses for clarity */
    function speakSentence(text, mode = 'normal') {
        if (!_available || !text) return Promise.resolve();
        // Insert SSML-like pauses: add commas after every ~3 words for natural pacing
        const words = text.split(' ');
        let paced = '';
        for (let i = 0; i < words.length; i++) {
            paced += words[i];
            // Add a slight comma pause every 3 words (if no punctuation already)
            if ((i + 1) % 3 === 0 && i < words.length - 1 && !/[,;.!?]$/.test(words[i])) {
                paced += ',';
            }
            if (i < words.length - 1) paced += ' ';
        }
        return _browserSpeak(paced, mode);
    }

    function stopSpeech() {
        if (_available) speechSynthesis.cancel();
        _speaking = false;
        _updateUI(false);
    }

    function isSpeaking() {
        return _speaking;
    }

    function isAvailable() {
        return _available;
    }

    return {
        initVoices,
        getBestEnglishVoice,
        speakText,
        speakSentence,
        stopSpeech,
        isSpeaking,
        isAvailable,
        CONFIG
    };
})();

// ============================================
// GLOBAL WRAPPER — future-ready entry point
// Replace internals with cloud TTS later
// ============================================

function playPronunciation(text, mode = 'normal') {
    // Currently uses browser speech synthesis
    // To switch to cloud TTS: replace this body
    return Pronunciation.speakText(text, mode);
}

// ============================================
// BACKWARD-COMPATIBLE WRAPPERS
// Used throughout the app — do not remove
// ============================================

function speakText(text, mode = 'normal') {
    return playPronunciation(text, mode);
}

function speak(text, rate = 0.8) {
    if (!text) return;
    const mode = rate <= 0.6 ? 'slow' : 'normal';
    playPronunciation(text, mode);
}

function speakSlow(text) { playPronunciation(text, 'slow'); }
function speakNormal(text) { playPronunciation(text, 'normal'); }

function speakVi(text, rate = 0.9) {
    // Vietnamese speech — uses browser API directly
    if (!text || !Pronunciation.isAvailable()) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'vi-VN';
    u.rate = rate;
    u.pitch = 1.0;
    u.volume = 1.0;
    const voices = speechSynthesis.getVoices();
    const viVoice = voices.find(v => v.lang === 'vi-VN') || voices.find(v => v.lang.startsWith('vi'));
    if (viVoice) u.voice = viVoice;
    speechSynthesis.speak(u);
}

function speakBoth(enText, viText, enRate = 0.8) {
    if (!Pronunciation.isAvailable()) return;
    Pronunciation.stopSpeech();
    const mode = enRate <= 0.6 ? 'slow' : 'normal';
    playPronunciation(enText, mode).then(() => {
        setTimeout(() => speakVi(viText), 300);
    });
}
