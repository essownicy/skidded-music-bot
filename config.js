module.exports = {
	app: {
		token: "",
		playing: "skidded from zerio, friends only bot",
		global: true,
		guild: "965981364946104381",
	},

	opt: {
		DJ: {
			enabled: false,
			roleName: "",
			commands: [],
		},
		maxVol: 1000,
		leaveOnEnd: true,
		loopMessage: false,
		spotifyBridge: true,
		defaultvolume: 75,
		discordPlayer: {
			ytdlOptions: {
				quality: "highestaudio",
				highWaterMark: 1 << 25,
			},
		},
	},
};
