import { useState, useEffect } from 'react';

export const useTypingEffect = (words, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) => {
    const [displayText, setDisplayText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentWord.length) {
                    setDisplayText(currentWord.slice(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(displayText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, isDeleting ? deletingSpeed : (displayText.length === currentWord.length ? pauseTime : typingSpeed));

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

    return displayText;
};

export default useTypingEffect;
