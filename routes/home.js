// const express = require('express');
// const request = require('request');
// // But this time, we only call the router part of express
// const router = express.Router();
// const fetch = require('node-fetch');

// // Code largely from the simple example, only app. changed into router and '/posts/' stripped from the url
// router.get("/", async function (req, res) {
// 	const result = await catCall();
// 	const repos = await dogCall();
// 	repos.forEach(repo => {
// 		console.log(repo.name);
// 	});
// 	// res.render("index", {
// 	// 	'userData': result,
// 	// 	'repos': repos
// 	// });
// });
// async function catCall() {
// 	try {

// 		const response = await fetch('');

// 		if (response.ok) {
// 			const result = await response.json();
// 			return result;
// 		}

// 		return [];
// 	} catch (error) {
// 		return [];
// 	}
// }
// async function dogCall() {
// 	try {

// 		const repoResp = await fetch('');

// 		if (repoResp.ok) {
// 			const repos = await repoResp.json();
// 			return repos;
// 		}
// 		return [];
// 	} catch (error) {
// 		return [];
// 	}
// }
// // Make sure to export the router so it becomes available on imports
// module.exports = router;