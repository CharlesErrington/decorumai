import React from "react";

export default function Hero() {
	return (
		<section className="hero-welcome-wrapper hero-1">
			<div className="single-slide text-white">
				<div className="container">
					<div className="row">
						<div className="col-xl-7 col-12 col-lg-10 offset-lg-1 offset-xl-0">
							<div className="hero-contents">
								<h1>Autonomous Chat Moderation Redefined</h1>
								<p>
								Our AI does the heavy lifting—detecting and filtering NSFW, spam, and self-promo with ease.
								</p>
								
								
							</div>
						</div>
						<div className="col-xl-5 col-12 text-xl-end col-lg-10 offset-lg-1 offset-xl-0">
							<div className="hero-mobile mt-5 mt-xl-0">
								<img src="img/robot-sweep.png" alt="xmoze app" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
