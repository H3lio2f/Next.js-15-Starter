import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers'; // Import the cookies function from next/headers

const locales = ['en', 'pt'];

export default getRequestConfig(async () => {
  const cookieStore = cookies();
  
  let locale = cookieStore.get('locale')?.value || 'pt'; 

  if (!locales.includes(locale)) {
    locale = 'pt';
  }

  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default
  };
});
