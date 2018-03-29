
function cLB(){

	var lb = new LetterBlock(parseInt(Math.random() * (canvasWidth-50)), -50, 120, Letters[parseInt(Math.random() * Letters.length)]);

	return lb;
};

/// 2.76 sec
var s = 2.76;

musicTimeIndex = 0;
var musicTime = [

	/// Easy
	[6.6-s,false],
	[8.2-s,false],
	[13-s,false],
	[16.2-s,false],
	[19.4-s,false],
	[22.6-s,false],
	[25.85-s,false],
	[29.66-s,false],
	[32.25-s,false],
	[35-s,false],
	[38.55-s,false],
	[43.40-s,false],
	[45-s,false],
	[46.28-s,false],
	[48.2-s,false],
	[51.5-s,false],
	[52.2-s,false],
	[54.24-s,false],
	[57.86-s,false],
	[58.7-s,false],
	[59.2-s,false],
	[62.22-s,false],

	/// Medium
	[64.3-s,false], [66.25-s,false], [67.48-s,false], [68.6-s,false], [70-s,false],

	[70.92-s,false], [71.47-s,false], [72.65-s,false], [73.3-s,false], [74.6-s,false], [75.77-s,false], [77.1-s,false],	[78.76-s,false],
	[79.85-s,false], [81-s,false], [82.2-s,false],

	[83.4-s,false], [84.4-s,false], [85.35-s,false], [86.22-s,false], [87.25-s,false], [88.5-s,false], [89.25-s,false], [89.9-s,false],
	[90.6-s,false], [91.8-s,false], [92.3-s,false], [93.1-s,false], [94.3-s,false], [95-s,false],
	
	[96.24-s,false], [97.45-s,false], [98.6-s,false], [99.7-s,false], [100.24-s,false], [101.6-s,false], [102.6-s,false], [103.8-s,false],
	[105-s,false], [106.15-s,false], [107.4-s,false], [108.54-s,false], [109.4-s,false], [110.4-s,false], [111.4-s,false],

	/// Hard
	[113.8-s,false], [114.4-s,false], [115.38-s,false], [116.25-s,false], [116.60-s,false], [117.35-s,false], [117.85-s,false], [118.2-s,false],
	[118.6-s,false], [119.8-s,false], [120.6-s,false], [121-s,false], [122.2-s,false], [122.64-s,false], [123-s,false], [123.6-s,false],
	[123.7-s,false], [124.22-s,false], [124.6-s,false], [125-s,false], [126.18-s,false], [127-s,false], [128.2-s,false], [129-s,false],
	[129.3-s,false], [130.2-s,false], [130.6-s,false], [131.4-s,false], [132.2-s,false], [132.6-s,false], [133.2-s,false], [133.45-s,false],
	[133.8-s,false], [134.6-s,false], [135.4-s,false], [135.83-s,false], [136.6-s,false], [137.38-s,false], [137.8-s,false], [138.8-s,false],
	[139-s,false], [139.9-s,false], [140.29-s,false],

	[141-s,false], [141.9-s,false], [142.23-s,false],
	[143-s,false], [143.9-s,false], [144.23-s,false],
	[145-s,false], [145.9-s,false], [146.24-s,false],
	[147.4-s,false], [148.3-s,false], 
	[149.4-s,false], [150.3-s,false],
	[151.4-s,false], [152.7-s,false],
	[153.8-s,false], [154.6-s,false],
	[155.8-s,false], [156.6-s,false],
	[157.8-s,false], [158.16-s,false], [159.1-s,false],

	[160.2-s,false]

];

/*

if (!musicTime[musicTimeIndex][1]) {

}

*/

/*
switch(GameController.currentMusicTimestamp) {
	case 11-s: LetterBlockObjects.push(cLB()); break;
	case 18-s: LetterBLockObjects.push(cLB()); break;
}
*/




