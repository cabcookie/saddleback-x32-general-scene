# saddleback-x32-general-scene
The Behringer X32 Scene File of Saddleback Berlin Church's Production Team.

Open topics:
- [ ] How many icons can be selected? (see [Configuration](#configuration))
- [ ] Explain the special EQ types (see [Special types for matrix or main channels](##special-types-for-matrix-or-main-channels))

![X32](/X32-images/Behringer-X32.jpg)

This description explains the structure of the X32 scene file from top to bottom. Little by little we will be able to describe all parts of the file. At the moment, those parts that have not yet been fully evaluated are marked with the text “Not yet evaluated”.

Table of Contents
=================

  * [General Configuration](#general-configuration)
     * [Linking Channels](#linking-channels)
     * [Monitoring settings (Not yet evaluated)](#monitoring-settings-not-yet-evaluated)
     * [Routing](#routing)
     * [User control section (Not yet evaluated)](#user-control-section-not-yet-evaluated)
     * [Not yet evaluated](#not-yet-evaluated-1)
  * [Channel Configuration](#channel-configuration)
     * [Configuration](#configuration)
     * [Delay](#delay)
     * [Pre Amps](#pre-amps)
     * [Gate Configuration](#gate-configuration)
     * [Dynamics Configuration](#dynamics-configuration)
     * [Insert Configuration](#insert-configuration)
     * [Equalizer Configuration](#equalizer-configuration)
     * [Mix Sends](#mix-sends)
     * [Group Configuration](#group-configuration)
     * [Automix Configuration](#automix-configuration)
  * [Auxiliary Input Configuration (Not yet evaluated)](#auxiliary-input-configuration-not-yet-evaluated)
  * [Effects Return Configuration (Not yet evaluated)](#effects-return-configuration-not-yet-evaluated)
  * [Mix Bus Configuration (Not yet evaluated)](#mix-bus-configuration-not-yet-evaluated)
  * [Matrix Configuration (Not yet evaluated)](#matrix-configuration-not-yet-evaluated)
  * [Main Bus Configuration (Not yet evaluated)](#main-bus-configuration-not-yet-evaluated)
  * [DCA Groups (Not yet evaluated)](#dca-groups-not-yet-evaluated)
  * [Settings for Effect Devices (Not yet evaluated)](#settings-for-effect-devices-not-yet-evaluated)
  * [Output Channels (Not yet evaluated)](#output-channels-not-yet-evaluated)
     * [Main Outputs](#main-outputs)
     * [Auxiliary Outputs](#auxiliary-outputs)
     * [P16 Outputs](#p16-outputs)
     * [Additional Outputs](#additional-outputs)
  * [Headamps (Not yet evaluated)](#headamps-not-yet-evaluated)

Created by [gh-md-toc](https://github.com/ekalinin/github-markdown-toc). Usage: `./gh-md-toc saddleback-x32-general-scene/README.md` and then copy the output of the terminal into the README.md file by replacing the exsting table of content.

## How to use the template
`[SCN]` - take settings from scene file template (Soundboard Setup.scn)
`[CH]` - number of the mixer channel
`[IE]` - number of the In Ear channel
`[AUX]` - number of the aux input channel
`[LIB]` - takes the settings from the channel's library
`[IEM]` - takes the settings from the In Ear library (bus settings)
`[IEM-S]` - takes the settings from the In Ear library (bus send settings)

## General Configuration
[Back to TOC](#table-of-content)
### Linking Channels
The following settings link two adjacent channels. For example, channels 1 & 2 or 5 & 6 are linked together when the switch is set to ON. The channels remain independent of each other when the switch is set to OFF.

The following lines list the link settings for channels, auxiliary channels, effect channels, mix busses and matrix channels (in the order given):
```
/config/chlink OFF OFF OFF OFF ON OFF ON OFF OFF OFF OFF OFF OFF OFF ON OFF
/config/auxlink ON ON ON ON
/config/fxlink ON ON ON ON
/config/buslink OFF OFF OFF OFF OFF ON OFF OFF
/config/mtxlink ON ON OFF
```
### Monitoring settings (Not yet evaluated)
```
/config/mute OFF OFF OFF OFF OFF OFF
/config/linkcfg ON ON ON ON
/config/mono LR+M ON
/config/solo   0.0 AUX78 0.0 PFL PFL PFL ON OFF ON -22 OFF OFF OFF   0.3 OFF OFF OFF
/config/talk ON EXT
/config/talk/A -12.0 OFF ON %000000000000000010
/config/talk/B -12.0 ON OFF %000000000010000000
/config/osc -40.0 100.2 1k00 F1 PINK 17
```
### Routing
The settings, from which sources the signals are obtained (digital snake, local inputs, input via the I/O card, etc.) can be seen below. The A stands for a Digital Snake connected to Ethernet port A. The B correspondingly for Ethernet port B. In addition, the settings define which signals are routed via the outputs.
```
/config/routing/IN A1-8 A9-16 A17-24 B1-8 AUX1-4
/config/routing/AES50A OUT1-8 OUT9-16 OUT1-8 OUT9-16 P161-8 P169-16
/config/routing/AES50B OUT1-8 OUT9-16 OUT9-16 OUT9-16 P161-8 P169-16
/config/routing/CARD A1-8 A9-16 A17-24 A25-32
/config/routing/OUT OUT1-4 OUT5-8 OUT9-12 OUT13-16
```
#### Not yet evaluated
```
/config/routing/PLAY AN1-8 AN1-8 AN1-8 AN1-8 AUX1-4
/config/routing REC
```
### User control section (Not yet evaluated)
These settings describe how the user controls on the right side of the X32 are configured. This allows very flexible, fast settings to be made, which are otherwise distributed in various submenus.

![User Controls](/X32-images/user-controls.jpg)

```
/config/userctrl/A MG
/config/userctrl/A/enc "X000" "X100" "X201" "X300"
/config/userctrl/A/btn "O40" "X100" "X201" "X300" "P0051" "P0052" "P0053" "P0054"
/config/userctrl/B GN
/config/userctrl/B/enc "DG" "DJ" "DK" "DL"
/config/userctrl/B/btn "P0010" "P0011" "P0012" "P0013" "P0000" "P0000" "P0000" "P0000"
/config/userctrl/C BL
/config/userctrl/C/enc "" "-" "-" "-"
/config/userctrl/C/btn "-" "-" "-" "-" "S200" "S201" "S202" "-"
```
### Not yet evaluated
```
/config/tape 0.0 0.0 ON
/config/amixenable OFF OFF
```

## Channel Configuration
[Back to TOC](#table-of-content)

The next 1024 lines are a simple repetition of the following 32 lines for each of the 32 channels of the X32 - the channel configuration.
Each line starts with the characters `/ch/` followed by the number of the respective mixer channel (e.g. `/ch/01/`). Of course, each channel has its own settings. However, we want to describe only once which settings can be set in a mixer channel using the example of the first channel.

![Channel Settings](/X32-images/channel-settings.jpg)

```
/ch/01/config "Mani" 1 CY 1
/ch/01/delay OFF   0.3
/ch/01/preamp +0.0 OFF ON 24 136
/ch/01/gate OFF EXP4 -38.5 27.0 20  100  576 0
/ch/01/gate/filter OFF 3.0 1k39
/ch/01/dyn ON COMP RMS LIN -23.0 2.0 1 8.00 74 0.03  576 POST 0 100 OFF
/ch/01/dyn/filter OFF 3.0 990.9
/ch/01/insert OFF POST OFF
/ch/01/eq ON
/ch/01/eq/1 VEQ 232.3 -6.00 4.3
/ch/01/eq/2 PEQ 514.1 -5.00 3.4
/ch/01/eq/3 PEQ 1k21 -4.25 4.3
/ch/01/eq/4 HCut 11k91 +0.00 2.0
/ch/01/mix ON  +0.2 ON +0 OFF   -oo
/ch/01/mix/01 ON  -0.8 +0 PRE
/ch/01/mix/02 ON -10.5
/ch/01/mix/03 ON -10.0 +0 PRE
/ch/01/mix/04 ON -14.0
/ch/01/mix/05 ON -12.0 +0 PRE
/ch/01/mix/06 ON -13.5
/ch/01/mix/07 ON -11.0 +0 PRE
/ch/01/mix/08 ON   -oo
/ch/01/mix/09 ON  +0.5 +0 POST
/ch/01/mix/10 ON   -oo
/ch/01/mix/11 ON  -7.5 +0 POST
/ch/01/mix/12 ON  -7.5
/ch/01/mix/13 ON   -oo +0 POST
/ch/01/mix/14 ON   -oo
/ch/01/mix/15 ON   0.0 +0 POST
/ch/01/mix/16 ON -11.5
/ch/01/grp %00000001 %000000
/ch/01/automix OFF -12.0
```

Many of the settings in one mixer channel also reappear in other areas. Since the structure is always very comparable, we want to deal with the individual settings in general.

### Configuration
This setting is used for mixer channels, aux input channels (both including the setting for the input channel), effect return channels, mix busses, matrix channels, main channels and DCA groups and always includes the following structure.
```
/config "[name]" [icon] [color] [input channel - if appropriate]
```

* `name`: The name is shown in the display and can be up to 12 characters long.
* `icon`: The X32 supports various icons that are shown in the display. The icon is selected by a number between 1 and ?.
* `color`: For the different colors that the display supports, there is an abbreviation of two letters each. If the color of the display is to be inverted, then a small i will be put after the abbreviation. See colors below.
* `input channel`: If it is a mixer channel or an auxiliary input channel, the number of the input channel is indicated here. Otherwise, this setting is not set.

#### Colors
* `GN`: green
* `CY`: cyan
* `MG`: magenta
* `WH`: white
* `YE`: yellow
* `RD`: red
* `BL`: blue

### Delay
A delay can be set for mixer channels and main output channels.
```
/delay [ON/OFF]   [milliseconds]
```

### Pre Amps
Preamplifiers are set for mixer channels, aux input channels and matrix channels. The settings are slightly different.
This is what the settings for a mixer channel look like:
```
/preamp [amplification with +/-] [ON/OFF for polarity] [ON/OFF for low cut filter (Low))] [Strength of the low cut filter in dB per octave (always 24)] [Frequency of the low cut filter]
```
Aux input channels support only the gain and ON/OFF setting for polarity, matrix channels even only the ON/OFF for polarity.

### Gate Configuration
Gate settings are only available for mixer channels. They look like this.
```
/gate [ON/OFF] [type of gate (EXPx or GATE)] [threshold in +/- dB] [range of reduction in dB] [attack in milliseconds]  [hold in milliseconds]  [release in milliseconds] [source channel (0 = self)]
/gate/filter [ON/OFF] [type (width)] [frequency of filter]
```

### Dynamics Configuration
Dynamic settings can be made in mixer channels, mix bus channels, matrix channels and in the main channels (L/R and M/C). The parameters are always identical.
```
/dyn [ON/OFF] [COMP/EXP] [RMS/PEAK] [LIN/LOG] [threshold in +/- dB] [ratio x:1] [knee] [gain] [attack in milliseconds] [hold in milliseconds]  [release in milliseconds] [POST/PRE (before or after EQ)] 0 100 OFF
/dyn/filter [ON/OFF] [type (width)] [frequency of filter]
```

### Insert Configuration
Insert settings can be made in mixer channels, mix bus channels, matrix channels and in the main channels (L/R and M/C). The parameters are always identical.
```
/insert [OFF/ON] [POST/PRE (before or after EQ and dynamics)] [OFF, FX or AUX insert target]
```
The name of the inserted signals begins with FX or AUX followed by the number of the corresponding channel and - in the case of FX - an L or R for the corresponding left or right channel of the assigned effect device. A few examples:
* `FX1L`: The current channel is sent to the left input channel of the first effect device.
* `AUX2`: The current channel is transmitted via the second auxiliary channel. The channel accordingly expects the revised signal back via the input of the second auxiliary channel, so that this signal can be further processed in the channel strip.

### Equalizer Configuration
Equalizer settings can be made in mixer channels, auxiliary input channels, effect return channels, mixer bus channels, matrix channels and in the main channels (L/R and M/C). The equalizer settings take up most of the space in the X32 scene file. You need a total of 408 lines, which is almost one-fifth of the total file size. The settings are almost always the same, but the mixer channels, auxiliary input channels and effect return channels each have only four parametric equalizers, while the mixer bus channels, the matrix channels and the main channels each have six parametric equalizers.
```
/eq [ON/OFF]
/eq/[no of EQ (between 1-4 or 1-6)] [type of EQ (see below)] [filter frequency] [gain +/- in dB] [bandwith or quality]
```
#### Types of EQ
* `LCut`: low cut filter
* `LShv`: low shelve filter
* `PEQ`: parametric EQ
* `VEQ`: vintage EQ (parametric as well)
* `HShv`: high shelve filter
* `HCut`: high cut filter

####  Special types for matrix or main channels
The following equalizer types can only be used with equalizer 1 or 6. If these modes are used, the settings for equalizers 2 and 5 are automatically ignored. This means that only 4 equalizers can be used if both equalizer 1 and equalizer 6 use these EQ types.

These filters are low-pass and high-pass filters with different strengths of the frequency short cut (dB reduction per octave) and slightly different curves. The number in the filter expresses how much the reduction is in dB per octave.
* `BU6`
* `BU12`
* `BS12`
* `LR12`
* `BU18`
* `BU24`
* `BS24`
* `LR24`

### Mix Sends
The “Mix Sends” may look slightly different for the different channel types.
#### Sends to Main
In any case, each channel type has the following “Mix Send”:
```
/mix [ON/OFF (OFF if muted)]  [dB to L/R (-oo if “off”)] [ON/OFF (send to L/R)] [panorama (-100 for L, +100 for R)] [ON/OFF (send to M/C)]   [dB to M/C (-oo if “off”)]
```
The matrix channels and the main channels only have the following “Mix Send”:
```
/mix [ON/OFF (OFF if muted)]  [dB to L/R (-oo if “off”)]
```
The main stereo channel (L/R) also looks like this:
```
/main/st/mix [ON/OFF (OFF if muted)]  [dB to L/R (-oo if “off”)] [panorama (-100 for L, +100 for R)]
```
#### Sends to Mix Bus or Matrix Bus
The mixer channels, auxiliary input channels and effect return channels can each be sent to the mix bus channels. The mix bus channels and the main channels can be sent to the matrix channels. The settings are organized the same in all cases. Two mix bus or matrix channels each are PRE or POST faders set - only the odd channel sets this option.

The panorama setting can also only be set in the mix bus with the odd channel number. The idea is as follows: For example, if two mixer channels are linked together, as is usually the case with the keyboard, and these two channels are sent to a stereo mix bus, then the left channel of the keyboard sends the signal with the panorama setting -100 (the far left) to the two linked mix buses, and the right channel of the keyboard is sent to the two linked mix buses with the panorama setting +100 (the far right). This way the left keyboard signal gets into the left mix bus and the right keyboard signal into the right mix bus.
```
/mix/[odd channel no] [ON/OFF (OFF if muted)]  [+/- dB to mix channel] [panorama (-100 for L, +100 for R)] [PRE/POST fader]
/mix/[even channel no] [ON/OFF (OFF if muted)] [+/- dB to mix channel]
```

### Group Configuration
Group settings can be made for mixer channels, auxiliary input channels, effect return channels and mix bus channels. There are DCA groups and mute groups. The configuration is always organized as follows:
```
/grp %[switches for DCA groups] %[switches for mute groups]
```
The switches are organized from right to left and are switched on with 1 and off with 0. So the first group is on the far right, the last group (DCA 8 or Mute 6) is on the far left in the list.

For a better understanding a few examples:
* `01010101`: This channel is assigned to DCA groups 1, 3, 5 and 7.
* `011000`: This channel is assigned to mute groups 4 and 5.

### Automix Configuration (Not yet evaluated)
```
/ch/01/automix OFF -12.0
```
## Auxiliary Input Configuration (Not yet evaluated)
[Back to TOC](#table-of-content)

The auxiliary channel inputs provide the settings shown below. These are described in detail in section [Channel Configuration](#channel-configuration).
```
/auxin/01/config "" 55 GN 33
/auxin/01/preamp +8.8 OFF
/auxin/01/eq ON
/auxin/01/eq/1 LCut 91.4 -9.50 1.3
/auxin/01/eq/2 PEQ 496.6 +0.50 3.1
/auxin/01/eq/3 PEQ 1k97 +0.00 2.0
/auxin/01/eq/4 HShv 10k02 +0.00 2.0
/auxin/01/mix ON   -oo ON -100 OFF   -oo
/auxin/01/mix/01 ON   -oo -100 PRE
/auxin/01/mix/02 ON   -oo
/auxin/01/mix/03 ON   -oo -100 PRE
/auxin/01/mix/04 ON   -oo
/auxin/01/mix/05 ON   -oo -100 PRE
/auxin/01/mix/06 ON   -oo
/auxin/01/mix/07 ON   -oo -100 PRE
/auxin/01/mix/08 ON   -oo
/auxin/01/mix/09 ON   -oo -100 POST
/auxin/01/mix/10 ON   -oo
/auxin/01/mix/11 ON   -oo -100 POST
/auxin/01/mix/12 ON   -oo
/auxin/01/mix/13 ON   -oo -100 POST
/auxin/01/mix/14 ON   -oo
/auxin/01/mix/15 ON   -oo -100 POST
/auxin/01/mix/16 ON   -oo
/auxin/01/grp %00000000 %000000
```

## Effects Return Configuration (Not yet evaluated)
[Back to TOC](#table-of-content)

The effect return channels provide the settings shown below. These are described in detail in section [Channel Configuration](#channel-configuration).
```
/fxrtn/01/config "" 61 MG
/fxrtn/01/eq ON
/fxrtn/01/eq/1 LCut 133.7 +0.00 2.0
/fxrtn/01/eq/2 PEQ 317.0 -7.25 1.6
/fxrtn/01/eq/3 PEQ 778.1 -5.75 4.3
/fxrtn/01/eq/4 HCut 6k62 +0.00 2.0
/fxrtn/01/mix ON   0.0 ON -100 OFF   -oo
/fxrtn/01/mix/01 ON  -4.3 -100 POST
/fxrtn/01/mix/02 ON   -oo
/fxrtn/01/mix/03 OFF  -3.3 -100 POST
/fxrtn/01/mix/04 ON   -oo
/fxrtn/01/mix/05 ON   -oo -100 POST
/fxrtn/01/mix/06 ON   -oo
/fxrtn/01/mix/07 ON   -oo -100 POST
/fxrtn/01/mix/08 ON   -oo
/fxrtn/01/mix/09 ON   -oo -100 POST
/fxrtn/01/mix/10 ON   -oo
/fxrtn/01/mix/11 ON  +0.8 -100 POST
/fxrtn/01/mix/12 ON  +0.8
/fxrtn/01/mix/13 ON   -oo -100 POST
/fxrtn/01/mix/14 ON   -oo
/fxrtn/01/mix/15 ON   -oo -100 POST
/fxrtn/01/mix/16 ON   -oo
/fxrtn/01/grp %00001000 %000000
```

## Mix Bus Configuration (Not yet evaluated)
[Back to TOC](#table-of-content)

The mix bus channels provide the settings shown below. These are described in detail in section [Channel Configuration](#channel-configuration).
```
/bus/01/config "1 Mani" 53 WH
/bus/01/dyn ON COMP RMS LOG -22.5 2.0 0 0.00 35 0.25  226 POST 0 100 OFF
/bus/01/dyn/filter OFF 3.0 990.9
/bus/01/insert OFF PRE OFF
/bus/01/eq ON
/bus/01/eq/1 LShv 79.6 +0.00 2.0
/bus/01/eq/2 PEQ 158.9 +0.00 2.0
/bus/01/eq/3 PEQ 611.0 -4.50 2.0
/bus/01/eq/4 PEQ 3k68 -0.25 3.9
/bus/01/eq/5 PEQ 5k02 +0.00 2.0
/bus/01/eq/6 HCut 20k00 -0.50 2.0
/bus/01/mix OFF   0.0 OFF +0 OFF -81.0
/bus/01/mix/01 ON   -oo +0 POST
/bus/01/mix/02 ON   -oo
/bus/01/mix/03 ON   -oo +0 POST
/bus/01/mix/04 ON   -oo
/bus/01/mix/05 ON   0.0 +0 POST
/bus/01/mix/06 ON   -oo
/bus/01/grp %00000000 %000000
```

## Matrix Configuration (Not yet evaluated)
[Back to TOC](#table-of-content)

The matrix channels provide the settings shown below. These are described in detail in section [Channel Configuration](#channel-configuration).
```
/mtx/01/config "Spk L Del" 66 GNi
/mtx/01/preamp OFF
/mtx/01/dyn OFF COMP RMS LOG 0.0 3.0 1 0.00 10 10.0  151 POST 100 OFF
/mtx/01/dyn/filter OFF 3.0 990.9
/mtx/01/insert OFF PRE OFF
/mtx/01/eq ON
/mtx/01/eq/1 LCut 182.4 +0.00 2.9
/mtx/01/eq/2 PEQ 158.9 +0.00 2.0
/mtx/01/eq/3 PEQ 496.6 +0.00 2.0
/mtx/01/eq/4 PEQ 1k97 +0.00 2.0
/mtx/01/eq/5 PEQ 5k02 +0.00 2.0
/mtx/01/eq/6 HShv 10k02 +0.00 2.0
/mtx/01/mix ON -16.8
```

## Main Bus Configuration (Not yet evaluated)
[Back to TOC](#table-of-content)

There are two main busses that can be configured: `/main/st/` (the stereo bus) and `/main/m/` (the mono bus, mostly used for the subwoofer). The settings are identical except for one, which is why we will only discuss the stereo bus and the only exception below.

The main channels provide the settings shown below. These are described in detail in section [Channel Configuration](#channel-configuration).
```
/main/st/config "" 73 GNi
/main/st/dyn OFF COMP RMS LOG 0.0 4.0 1 0.00 10 10.0  151 POST 100 OFF
/main/st/dyn/filter OFF 3.0 990.9
/main/st/insert ON PRE FX8L
/main/st/eq ON
/main/st/eq/1 LShv 79.6 +0.00 2.0
/main/st/eq/2 PEQ 158.9 +0.00 2.0
/main/st/eq/3 PEQ 496.6 +0.00 2.0
/main/st/eq/4 PEQ 1k97 +0.00 2.0
/main/st/eq/5 PEQ 5k02 +0.00 2.0
/main/st/eq/6 HShv 10k02 +0.00 2.0
/main/st/mix ON  -9.9 +0
/main/st/mix/01 ON   0.0 +0 POST
/main/st/mix/02 ON   0.0
/main/st/mix/03 ON   0.0 +0 POST
/main/st/mix/04 ON   0.0
/main/st/mix/05 ON   -oo +0 POST
/main/st/mix/06 ON   -oo
```

In the mono bus the setting `/mix` lacks an option:
```
/main/m/mix ON -16.8
```

## DCA Groups (Not yet evaluated)
[Back to TOC](#table-of-content)

The settings for the 8 DCA groups are always identical, which is why only one is listed here.
```
/dca/1 OFF  -2.2
/dca/1/config "Vocals" 43 CY
```

## Settings for Effect Devices (Not yet evaluated)
[Back to TOC](#table-of-content)

The X32 supports eight effect devices. The respective settings depend strongly on the selected effect, but the settings are always identical, which is why we will only give an example here.
```
/fx/1 VREV
/fx/1/source MIX15 MIX15
/fx/1/par 40 3.0 100 OFF FRONT 0.0 76 11k9 1.00 0.70 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
```

## Output Channels (Not yet evaluated)
[Back to TOC](#table-of-content)

### Main Outputs
```
/outputs/main/01 4 PRE OFF
/outputs/main/01/delay OFF   0.3
```

### Auxiliary Outputs
```
/outputs/aux/01 13 PRE OFF
```

### P16 Outputs
```
/outputs/p16/01 26 <-EQ OFF
/outputs/p16/01/iQ OFF none Linear 0
```

### Additional Outputs
```
/outputs/aes/01 0 POST OFF
/outputs/aes/02 0 POST OFF
/outputs/rec/01 14 PRE
/outputs/rec/02 15 PRE
```

## Headamps (Not yet evaluated)
[Back to TOC](#table-of-content)

There are a total of 128 head amplifiers in the X32 that can be set via the scene file. The count starts at 000 and goes to 127.
```
/headamp/000 +41.0 OFF
```
