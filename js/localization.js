document.addEventListener('DOMContentLoaded', async function () {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang') || 'en';

    try {
        const response = await fetch('../localization/Site.xcstrings');
        const translationsData = await response.json();

        console.log('Translations Data:', translationsData);

        const currentLangTranslations = translationsData.strings;

        if (!currentLangTranslations) {
            console.warn('Translations not found in the data.');
            return;
        }

        console.log('Current Language Translations:', currentLangTranslations);

        Object.keys(currentLangTranslations).forEach(key => {
            console.log('Current Key:', key);

            const translationUnits = currentLangTranslations[key].localizations;

            console.log('Current Translation Units:', translationUnits);

            if (translationUnits && translationUnits[langParam]) {
                const translationUnit = translationUnits[langParam].stringUnit.value;

                console.log('Current Translation Unit:', translationUnit);

                const element = document.querySelector(`[data-translate="${key}"]`);
                
                console.log('Current Element:', element);

                if (element) {
                    element.textContent = translationUnit;
                } else {
                    console.warn(`Element not found for the key '${key}'.`);
                }
            } else {
                console.warn(`Translation not found for the language '${langParam}' and key '${key}'.`);
            }
        });
    } catch (error) {
        console.error('Error loading translations:', error);
    }
});
