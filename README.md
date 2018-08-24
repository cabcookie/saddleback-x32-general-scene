# saddleback-x32-general-scene
The Behringer X32 Scene File of Saddleback Berlin Church's Production Team.

Open topics:
- [] How many icons can be selected?

![X32](/X32-images/Behringer-X32.jpg)

This description explains the structure of the X32 scene file from top to bottom. Little by little we will be able to describe all parts of the file. At the moment, those parts that have not yet been fully evaluated are marked with the text "Not yet evaluated".

## General Configuration
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

`name`: The name is shown in the display and can be up to 12 characters long.
`icon`: The X32 supports various icons that are shown in the display. The icon is selected by a number between 1 and ?.
`color`: For the different colors that the display supports, there is an abbreviation of two letters each. If the color of the display is to be inverted, then a small i will be put after the abbreviation. See colors below.
`input channel`: If it is a mixer channel or an auxiliary input channel, the number of the input channel is indicated here. Otherwise, this setting is not set.

#### Colors
`GN`: green
`CY`: cyan
`MG`: magenta
`WH`: white
`YE`: yellow
`RD`: red
`BL`: blue

### Delay
Für Mischpultkanäle und Haupt-Ausgangskanäle kann ein Delay eingestellt werden.
```
/delay [ON/OFF]   [milliseconds]
```

### Pre Amps
Preamplifiers are set for mixer channels, aux input channels and matrix channels. The settings are slightly different.
This is what the settings for a mixer channel look like:
```
/preamp [amplification with +/-] [ON/OFF for ? (maybe 48V or polarity)] [ON/OFF for ? (maybe high pass filter)] [Strength of the high-pass filter in dB per octave (mostly 24)] [Frequency of the high pass filter]
```
Aux input channels support only the gain and first ON/OFF settings, matrix channels even only the first ON/OFF.

### Gate Configuration
Gate settings are only available for mixer channels. They look like this.
```
/gate [ON/OFF] [type of gate (EXPx or GATE)] [threshold in +/- dB] 27.0 [attack in milliseconds]  [hold in milliseconds]  [release in milliseconds] 0
/gate/filter [ON/OFF] 3.0 [frequency of filter]
```

### Dynamics Configuration
/ch/01/dyn ON COMP RMS LIN -23.0 2.0 1 8.00 74 0.03  576 POST 0 100 OFF
/ch/01/dyn/filter OFF 3.0 990.9

### Insert Configuration
/ch/01/insert OFF POST OFF

### Equalizer Configuration
/ch/01/eq ON
/ch/01/eq/1 VEQ 232.3 -6.00 4.3
/ch/01/eq/2 PEQ 514.1 -5.00 3.4
/ch/01/eq/3 PEQ 1k21 -4.25 4.3
/ch/01/eq/4 HCut 11k91 +0.00 2.0

### Mix Sends
/ch/01/mix ON  +0.2 ON +0 OFF   -oo
/ch/01/mix/01 ON  -0.8 +0 PRE
/ch/01/mix/02 ON -10.5

### Group Configuration
/ch/01/grp %00000001 %000000

### Automix Configuration
/ch/01/automix OFF -12.0

## Auxiliary Input Configuration (Not yet evaluated)
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
There are two main busses that can be configured: `/main/st/` (the stereo bus) and `/main/m/` (the mono bus, mostly used for the subwoofer). The settings are identical except for one, which is why we will only discuss the stereo bus and the only exception below.

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
The settings for the 8 DCA groups are always identical, which is why only one is listed here.
```
/dca/1 OFF  -2.2
/dca/1/config "Vocals" 43 CY
```

## Settings for Effect Devices (Not yet evaluated)
The X32 supports eight effect devices. The respective settings depend strongly on the selected effect, but the settings are always identical, which is why we will only give an example here.
```
/fx/1 VREV
/fx/1/source MIX15 MIX15
/fx/1/par 40 3.0 100 OFF FRONT 0.0 76 11k9 1.00 0.70 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
```

## Output Channels (Not yet evaluated)
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
There are a total of 128 head amplifiers in the X32 that can be set via the scene file. The count starts at 000 and goes to 127.
```
/headamp/000 +41.0 OFF
```
