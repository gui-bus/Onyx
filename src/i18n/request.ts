import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({requestLocale}) => {
  // Use the locale from the request path
  let locale = await requestLocale;
  
  // Default to 'pt' if locale is not found
  if (!locale || !['en', 'pt'].includes(locale)) {
    locale = 'pt';
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
