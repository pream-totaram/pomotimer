#!/bin/env node
import chalk from 'chalk';
import ora from 'ora';
import { program } from 'commander';
import { PomoTimer } from './src/PomoTimer.js'

program
  .option("-m, --mins <string>", 'minutes', '25')
  .option("-s, --silent", 'Run without ambient sound')
  .parse();

const options = program.opts();
let mins = parseInt(options.mins) ?? 25;
const pomo = new PomoTimer(mins * 60);

pomo.start();
if (process.env.NODE_ENV == 'test') {
  console.log('[DEBUG] Audio Started');
}

const spinner = ora(`${chalk.bold.red('Starting Session')}`).start();
const timer = setInterval(() => {
  const seconds = pomo.getRemainingSeconds();
  mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const timeStr = `${mins}:${secs.toString().padStart(2, '0')}`
  spinner.text = `${chalk.bold.red('FOCUSING')}[${chalk.cyan(timeStr)}]`;

  if (seconds <= 0) {
    spinner.stop();
    clearInterval(timer);
    spinner.succeed(chalk.bold.green('Time is up! Take a break. '));
    process.exit(0);
  }
}, 1000);

