#!/usr/bin/env node
import { execSync } from 'node:child_process';
import { existsSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const runCommand = (command) => execSync(command, { stdio: 'pipe' }).toString().trim();

const ensureReleaseDir = (dir) => {
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
};

const releaseDir = resolve('release');
ensureReleaseDir(releaseDir);

const branchName = runCommand('git rev-parse --abbrev-ref HEAD');
const shortSha = runCommand('git rev-parse --short HEAD');
const archiveName = `turkce-derslik-${branchName}-${shortSha}.zip`;
const outputPath = resolve(releaseDir, archiveName);

const archiveCommand = `git archive --format=zip --output="${outputPath}" HEAD`;
execSync(archiveCommand, { stdio: 'inherit' });

console.log(`\n✅ Arşiv hazır: ${outputPath}`);
console.log('Bu dosya mevcut dalın en güncel hâlini içerir.');
