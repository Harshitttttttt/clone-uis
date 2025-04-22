import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import styles from "./main.module.css";

export const Route = createFileRoute("/google/main")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className={styles.main_container}>
			<div className={styles.header}>
				<div className={styles.left_part}>
					<div className={styles.about_store}>
						<a
							href="https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header"
							className={styles.about}
						>
							About
						</a>
						<a href="https://store.google.com/IN?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-IN">
							Store
						</a>
					</div>
				</div>
				<div className={styles.right_part}>
					<div className={styles.gmail_images_container}>
						<a href="https://gmail.com">Gmail</a>
						<a href="https://www.google.co.in/imghp?hl=en&ogbl">Images</a>
					</div>
					<div className={styles.app_sign_in_container}>
						<a
							href="https://www.google.co.in/intl/en/about/products"
							className={styles.google_apps}
						>
							<svg
								focusable="false"
								viewBox="0 0 24 24"
								className={styles.google_apps_icon}
							>
								<title>Google Apps Icon</title>
								<path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z" />
								<image
									xlinkHref="https://ssl.gstatic.com/gb/images/bar/al-icon.png"
									height="24"
									width="24"
								/>
							</svg>
						</a>
						<a
							className={styles.sign_in_button}
							href="https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.co.in/&ec=GAZAmgQ"
						>
							<span>Sign In</span>
						</a>
					</div>
				</div>
			</div>
			<div className={styles.logo}>
				<svg
					height={92}
					viewBox="0 0 272 92"
					width={272}
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>google-logo</title>
					<path
						d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
						fill="#EA4335"
					/>
					<path
						d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
						fill="#FBBC05"
					/>
					<path
						d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"
						fill="#4285F4"
					/>
					<path d="M225 3v65h-9.5V3h9.5z" fill="#34A853" />
					<path
						d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
						fill="#EA4335"
					/>
					<path
						d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"
						fill="#4285F4"
					/>
				</svg>
			</div>
			<div className={styles.search}>
				<div className={styles.search_bar}>
					<div className={styles.search_icon}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24px"
							viewBox="0 -960 960 960"
							width="24px"
							fill="#1f1f1f"
						>
							<title>Search Icon</title>
							<path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
						</svg>
					</div>
					<input type="text" className={styles.search_textarea} autoFocus />
					<div className={styles.mic_icon}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24px"
							viewBox="0 -960 960 960"
							width="24px"
							fill="#1f1f1f"
						>
							<title>Microphone Icon</title>
							<path d="M480-400q-50 0-85-35t-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35Zm0-240Zm-40 520v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Zm40-360q17 0 28.5-11.5T520-520v-240q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240q0 17 11.5 28.5T480-480Z" />
						</svg>
					</div>
					<div className={styles.lens_icon}>
						<svg
							focusable="false"
							viewBox="0 -960 960 960"
							xmlns="http://www.w3.org/2000/svg"
							height="24px"
							width={"24px"}
						>
							<title>Google Lens Icon</title>
							<path
								fill="var(--bbQxAb)"
								d="M480-320q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm240 160q-33 0-56.5-23.5T640-240q0-33 23.5-56.5T720-320q33 0 56.5 23.5T800-240q0 33-23.5 56.5T720-160Zm-440 40q-66 0-113-47t-47-113v-80h80v80q0 33 23.5 56.5T280-200h200v80H280Zm480-320v-160q0-33-23.5-56.5T680-680H280q-33 0-56.5 23.5T200-600v120h-80v-120q0-66 47-113t113-47h80l40-80h160l40 80h80q66 0 113 47t47 113v160h-80Z"
							/>
						</svg>
					</div>
				</div>
				<div className={styles.search_buttons}>
					<button type="button">Google Search</button>
					<button type="button">I'm Feeling Lucky</button>
				</div>
			</div>
			<div className={styles.additional_languages}>
				<div id="SIvCob">
					{"Google offered in: "}
					<a href="https://www.google.com/setprefs?sig=0_qhU5kyrrModcyYBCL6IF41pBtWc%3D&amp;hl=hi&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiul6nCheuMAxVop1YBHU5sGksQ2ZgBCBk">
						हिन्दी
					</a>
					<a href="https://www.google.com/setprefs?sig=0_qhU5kyrrModcyYBCL6IF41pBtWc%3D&amp;hl=bn&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiul6nCheuMAxVop1YBHU5sGksQ2ZgBCBo">
						বাংলা
					</a>
					<a href="https://www.google.com/setprefs?sig=0_qhU5kyrrModcyYBCL6IF41pBtWc%3D&amp;hl=te&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiul6nCheuMAxVop1YBHU5sGksQ2ZgBCBs">
						తెలుగు
					</a>
					<a href="https://www.google.com/setprefs?sig=0_qhU5kyrrModcyYBCL6IF41pBtWc%3D&amp;hl=mr&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiul6nCheuMAxVop1YBHU5sGksQ2ZgBCBw">
						मराठी
					</a>
					<a href="https://www.google.com/setprefs?sig=0_qhU5kyrrModcyYBCL6IF41pBtWc%3D&amp;hl=ta&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiul6nCheuMAxVop1YBHU5sGksQ2ZgBCB0">
						தமிழ்
					</a>
					<a href="https://www.google.com/setprefs?sig=0_qhU5kyrrModcyYBCL6IF41pBtWc%3D&amp;hl=gu&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiul6nCheuMAxVop1YBHU5sGksQ2ZgBCB4">
						ગુજરાતી
					</a>
					<a href="https://www.google.com/setprefs?sig=0_qhU5kyrrModcyYBCL6IF41pBtWc%3D&amp;hl=kn&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiul6nCheuMAxVop1YBHU5sGksQ2ZgBCB8">
						ಕನ್ನಡ
					</a>
					<a href="https://www.google.com/setprefs?sig=0_qhU5kyrrModcyYBCL6IF41pBtWc%3D&amp;hl=ml&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiul6nCheuMAxVop1YBHU5sGksQ2ZgBCCA">
						മലയാളം
					</a>
					<a href="https://www.google.com/setprefs?sig=0_qhU5kyrrModcyYBCL6IF41pBtWc%3D&amp;hl=pa&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiul6nCheuMAxVop1YBHU5sGksQ2ZgBCCE">
						ਪੰਜਾਬੀ
					</a>
				</div>
			</div>
			<div className={styles.bottom_box}>
				<div className={styles.country}>India</div>
				<div className={styles.footer}>
					<div className={styles.footerA}>
						<a href="https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">
							Advertising
						</a>
						<a href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1">
							Business
						</a>
						<a href="https://google.com/search/howsearchworks/?fg=1">
							How Search Works
						</a>
					</div>
					<div className={styles.footerB}>
						<a href="https://policies.google.com/privacy?hl=en-IN&fg=1">
							Privacy
						</a>
						<a href="https://policies.google.com/terms?hl=en-IN&fg=1">Terms</a>
						<div>Settings</div>
					</div>
				</div>
			</div>
		</div>
	);
}
