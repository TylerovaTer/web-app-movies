import { Roboto } from 'next/font/google'

/**
 * @see: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
 */
const robotoFont = Roboto({
	weight: ['100', '300', '400', '500', '700', '900'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
})

export const bodyFont = robotoFont
