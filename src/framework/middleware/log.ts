/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as os from "os";
import * as fs from "fs";
import * as path from "path";
import dayjs from "dayjs";
import * as util from "util";

const internal = {
	log :   console.log,
	error : console.error,
	info :  console.info,
	warn :  console.warn,
};

const root = process.cwd();
const logsDir = path.resolve(root, "logs");
try {
	if (!fs.readdirSync(logsDir)) {
		fs.mkdirSync(logsDir);
	}
} catch {
	fs.mkdirSync(logsDir);
}

async function writer(type: string, ...log: []) {
	const dayJs = dayjs();
	const today = dayJs.format("YYYYMMDD");
	const dateTime = dayJs.format("YYYY-MM-DD HH:mm:ss");
	const logPath = path.resolve(logsDir, `${today}.log`);
	log.forEach((logToFile) => {
		fs.appendFileSync(
			logPath,
			`[${dateTime}] ` + util.inspect(logToFile, false, 100).replace(/\\n/g, "")
		);
		fs.appendFileSync(
			logPath,
			os.EOL
		);
	});
	// @ts-ignore
	internal[type](`[${dateTime}]`, ...log);
}

console.log = (...log: []) => {
	writer("log", ...log);
};
console.info = (...log: []) => {
	writer("info", ...log);
};
console.error = (...log: []) => {
	writer("error", ...log);
};
console.warn = (...log: []) => {
	writer("warn", ...log);
};
