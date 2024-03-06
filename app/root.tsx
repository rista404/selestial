import type { LinksFunction } from '@remix-run/cloudflare'
import { cssBundleHref } from '@remix-run/css-bundle'
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react'
import './tailwind.css'
import favicon from '../public/favicon.svg'

export const links: LinksFunction = () => [
	...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
	{ rel: 'icon', type: 'image/svg+xml', href: favicon },
]

export default function App() {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<meta property="og:url" content="https://selestial.co/" />
				<meta property="og:site_name" content="selestial.co" />
				<meta property="og:title" content="selestial" />
				<meta
					property="og:image"
					content="https://selestial.co/thumbnail.png"
				/>
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="627" />
				<meta property="og:type" content="website" />
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	)
}
