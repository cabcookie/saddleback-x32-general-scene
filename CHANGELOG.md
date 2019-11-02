# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

In terms of this script the version number MAJOR.MINOR.PATCH would mean the following:

- MAJOR version when the changes would need a review of the templates that were created in After Effects or the approach of media files being used,
- MINOR version when you add functionality in a backwards-compatible manner, and
- PATCH version when you make backwards-compatible bug fixes.

## [Planned]

- Nothing

## [Work In Progress]

### Fixed

- Nothing

### Added

- import data from Github

### Changed

- Nothing

## [1.1.3] - 2019-11-02

### Changes on general scene file

- Updated vocal channels to make it more relevant
- Added a second stage announcer mic
- Deleted channels which were supposed for communications but were never used
- Updated In Ear channels

## [1.1.2] - 2019-04-27

### Changed presets (till April 19th)

- Gate settings Vocal Sarah
- EQ settings and inserted a freq band compressor on Vocal Lynne
- Pan settings Vocal Lindi
- Minor EQ settings Vocal Diazno
- Gate settings Vocal Daniela
- Optimized frequencies and effects (freq band compressor) on Dave's announcer mic
- EQ settings on Rick's voice
- Low pass filter settings on music presets
- EQ settings on Vernon's violin
- We are using the nord keyboard again and adapted settings on equalizers
- Gate, compressor and EQ settings on bass guitar
- EQ settings on Lynne's accoustic
- EQ and dynamics settings on Diazno's accoustic
- Gate and pan settings on Drum Overhead

### Added presets (till April 19th)

- Eduardo on electric guitar - finally ;-)
- Diazno on electric guitar

### Changed soundboard template (till April 19th)

- Accoustic SOLO channel now receives the signal from channel 5 as a standard
- Adjusted pre amps (headamp) especially the ones for the sermon and the interpreter (080-082)
- Put vocal settings for Lynne, Diazno and Dave on first three channels
- Put Lynne's accoustic settings on channel 5
- Adjusted settings for electric and bass guitar and keys
- Adapted settings for freq band compressor on FX channel 4 and adjusted EQ on Dave's announcer mic accordingly
- Adjusted reverb effect settings on FX channel 1

### Explained the headamp mapping on our sound board in README

## [1.1.1] - 2019-04-15

- added version number to channel 32

## [1.1.0] - 2019-03-10

### Added presets

- Vocal settings for Olivier
- Vocal settings for Feven
- Vocal settings for Johannes Fenner
- Vocal settings for Tejas
- Vocal settings for Praise
- Settings for Tejas' acoustic
- Solo acoustic
- Joshua as an announcer with a hand mic

### Changed presets

- Settings vor Violin Vernon
- Added low pass filter on music channel
- Settings for Ranis vocal
- Name of Bass guitar
- Dynamic and EQ settings for Sarah's vocal
- Settings for Diazno's guitar
- EQ for Johannes' electric
- EQ on Keys
- Settings for Mani's vocal
- Insert De-esser for Dave
- EQ and insert De-esser for Rick

### Changes on template

- Added headamp setting to the X32 template
- Adjusted headamp settings in general scene file
- Adjusted graphical EQ for main output
- Added solo acoustic
- Added low pass filter on music channel
- EQ and insert De-esser for Rick
- Insert De-esser for Dave
- EQ on Keys

### Changes on documentation

- Adapted markdown lint recommendations on CHANGELOG and README File
- explained in README how the preamp and phantom power settings work in the scene file (/headamp)
- adjusted structure on CHANGELOG file

## [1.0.3] - 2018-12-09

### Fixed

- some instruments needed the 48V power
- talkback mic A is now feeding into the Worship Leaders In Ear

### Added

- Setting for a solo overhead mic for the drums

### Changed

- reduced drum mics to only three for the moment (easier setup)
- Adjusted dynamics for Sarah's vocal mic
- Adjusted Lynne's accoustic, the violin, and the keys to work well with accoustic, keys, violin and bass guitar

## [1.0.2] - 2018-12-08

### Added

- added vocal settings for Ulrike

## [1.0.1] - 2018-11-04

### Added

- Change log file

### Changed

- Changed some equalizer settings on vocals (Ayo, Birgit, Lynne) and instruments (accoustic Lynne and violin Vernon) and some dynamics on Ranis vocals

## [1.0.0] - 2018-06-01

- Initial version with documentation of the X32 scene file in the README.md and the Google App Script files for generating the scene file automatically (not finished yet)
