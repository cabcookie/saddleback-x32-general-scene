# saddleback-x32-general-scene
The Behringer X32 Scene File of Saddleback Berlin Church's Production Team.

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
/main/m/config "Sub" 67 GNi
/main/m/dyn OFF COMP RMS LOG 0.0 3.0 1 0.00 10 10.0  151 POST 100 OFF
/main/m/dyn/filter OFF 3.0 990.9
/main/m/insert OFF PRE OFF
/main/m/eq ON
/main/m/eq/1 PEQ 64.7 +0.00 1.5
/main/m/eq/2 PEQ 133.7 +0.00 3.7
/main/m/eq/3 PEQ 447.7 +0.00 2.0
/main/m/eq/4 PEQ 1k97 +0.00 2.0
/main/m/eq/5 PEQ 5k02 +0.00 2.0
/main/m/eq/6 HCut 98.0 +0.00 2.0
/main/m/mix ON -16.8
/main/m/mix/01 ON   -oo +0 POST
/main/m/mix/02 ON   -oo
/main/m/mix/03 ON   -oo -2 POST
/main/m/mix/04 ON   -oo
/main/m/mix/05 ON   -oo +0 POST
/main/m/mix/06 ON   -oo
/dca/1 OFF  -2.2
/dca/1/config "Vocals" 43 CY
/dca/2 OFF  -4.0
/dca/2/config "Instruments" 23 GN
/dca/3 OFF  -7.4
/dca/3/config "Cajon" 11 RD
/dca/4 OFF -10.7
/dca/4/config "Effects" 68 MG
/dca/5 ON -67.0
/dca/5/config "Music" 62 CYi
/dca/6 ON   -oo
/dca/6/config "Sermon" 53 BL
/dca/7 ON   -oo
/dca/7/config "Announcer" 1 YE
/dca/8 ON   -oo
/dca/8/config "" 1 OFF
/fx/1 VREV
/fx/1/source MIX15 MIX15
/fx/1/par 40 3.0 100 OFF FRONT 0.0 76 11k9 1.00 0.70 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
/fx/2 CRS
/fx/2/source MIX16 MIX16
/fx/2/par 0.48 20 20 15.1 16.6 100 83 10k4 120 100 100 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
/fx/3 DLY
/fx/3/source INS INS
/fx/3/par 100 390 ST 1 1 25 10 20k0 97 72 70 20k0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
/fx/4 CRS
/fx/4/source INS INS
/fx/4/par 1.44 15 15 19.9 19.9 100 97 15k1 120 100 85 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
/fx/5 TEQ
/fx/5/par 0.0 0.0 0.0 2.5 2.5 3.5 4.5 0.5 1.0 1.5 3.0 -0.5 -2.5 -3.5 -2.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
/fx/6 GEQ2
/fx/6/par 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
/fx/7 GEQ2
/fx/7/par 0.0 0.0 0.5 0.0 0.0 0.0 -8.5 -12.5 -6.0 -12.5 0.0 -2.5 -11.0 -4.5 0.0 -13.0 -9.5 0.0 0.5 -11.0 -11.0 -2.5 -0.5 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0.0
/fx/8 GEQ
/fx/8/par 0.0 0.0 0.0 0.0 0.0 0.0 0.0 1.5 3.0 2.5 -0.5 -2.0 -2.0 0.0 -1.0 -2.5 -2.5 0.5 1.5 0.5 -1.0 -1.5 -3.5 -4.0 -2.5 0.0 0.0 0.0 0.0 0.0 0.0 0.0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
/outputs/main/01 4 PRE OFF
/outputs/main/01/delay OFF   0.3
/outputs/main/02 5 PRE OFF
/outputs/main/02/delay OFF   0.3
/outputs/main/03 6 PRE OFF
/outputs/main/03/delay OFF   0.3
/outputs/main/04 7 PRE OFF
/outputs/main/04/delay OFF   0.3
/outputs/main/05 8 PRE OFF
/outputs/main/05/delay OFF   0.3
/outputs/main/06 9 PRE OFF
/outputs/main/06/delay OFF   0.3
/outputs/main/07 10 PRE OFF
/outputs/main/07/delay OFF   0.3
/outputs/main/08 24 PRE OFF
/outputs/main/08/delay OFF   0.3
/outputs/main/09 14 POST OFF
/outputs/main/09/delay OFF   0.3
/outputs/main/10 15 POST OFF
/outputs/main/10/delay OFF   0.3
/outputs/main/11 13 POST OFF
/outputs/main/11/delay OFF   0.3
/outputs/main/12 20 POST OFF
/outputs/main/12/delay ON  12.0
/outputs/main/13 21 POST OFF
/outputs/main/13/delay ON  12.0
/outputs/main/14 22 POST OFF
/outputs/main/14/delay OFF   0.3
/outputs/main/15 23 POST OFF
/outputs/main/15/delay OFF   0.3
/outputs/main/16 3 POST OFF
/outputs/main/16/delay OFF   0.3
/outputs/aux/01 13 PRE OFF
/outputs/aux/02 12 PRE OFF
/outputs/aux/03 0 POST OFF
/outputs/aux/04 0 POST OFF
/outputs/aux/05 0 POST OFF
/outputs/aux/06 0 POST OFF
/outputs/p16/01 26 <-EQ OFF
/outputs/p16/01/iQ OFF none Linear 0
/outputs/p16/02 27 <-EQ OFF
/outputs/p16/02/iQ OFF none Linear 0
/outputs/p16/03 28 <-EQ OFF
/outputs/p16/03/iQ OFF none Linear 0
/outputs/p16/04 29 <-EQ OFF
/outputs/p16/04/iQ OFF none Linear 0
/outputs/p16/05 30 <-EQ OFF
/outputs/p16/05/iQ OFF none Linear 0
/outputs/p16/06 31 <-EQ OFF
/outputs/p16/06/iQ OFF none Linear 0
/outputs/p16/07 32 <-EQ OFF
/outputs/p16/07/iQ OFF none Linear 0
/outputs/p16/08 33 <-EQ OFF
/outputs/p16/08/iQ OFF none Linear 0
/outputs/p16/09 34 <-EQ OFF
/outputs/p16/09/iQ OFF none Linear 0
/outputs/p16/10 35 <-EQ OFF
/outputs/p16/10/iQ OFF none Linear 0
/outputs/p16/11 36 <-EQ OFF
/outputs/p16/11/iQ OFF none Linear 0
/outputs/p16/12 37 <-EQ OFF
/outputs/p16/12/iQ OFF none Linear 0
/outputs/p16/13 38 <-EQ OFF
/outputs/p16/13/iQ OFF none Linear 0
/outputs/p16/14 39 <-EQ OFF
/outputs/p16/14/iQ OFF none Linear 0
/outputs/p16/15 40 <-EQ OFF
/outputs/p16/15/iQ OFF none Linear 0
/outputs/p16/16 41 <-EQ OFF
/outputs/p16/16/iQ OFF none Linear 0
/outputs/aes/01 0 POST OFF
/outputs/aes/02 0 POST OFF
/outputs/rec/01 14 PRE
/outputs/rec/02 15 PRE
/headamp/000 +41.0 OFF
/headamp/001 +0.0 OFF
/headamp/002 +0.0 OFF
/headamp/003 +0.0 OFF
/headamp/004 +0.0 OFF
/headamp/005 +10.0 OFF
/headamp/006 +0.0 OFF
/headamp/007 +0.0 OFF
/headamp/008 +0.0 OFF
/headamp/009 +0.0 OFF
/headamp/010 +0.0 OFF
/headamp/011 +0.0 OFF
/headamp/012 +0.0 OFF
/headamp/013 +0.0 OFF
/headamp/014 +0.0 OFF
/headamp/015 +0.0 OFF
/headamp/016 +36.5 OFF
/headamp/017 +39.0 ON
/headamp/018 +32.0 OFF
/headamp/019 +48.5 OFF
/headamp/020 +0.0 OFF
/headamp/021 +0.0 OFF
/headamp/022 +60.0 OFF
/headamp/023 +38.5 OFF
/headamp/024 +0.0 OFF
/headamp/025 +0.0 OFF
/headamp/026 +0.0 OFF
/headamp/027 +0.0 OFF
/headamp/028 +0.0 OFF
/headamp/029 +0.0 OFF
/headamp/030 +0.0 OFF
/headamp/031 +0.0 OFF
/headamp/032 +42.5 OFF
/headamp/033 +33.0 OFF
/headamp/034 +48.0 OFF
/headamp/035 +40.0 ON
/headamp/036 +19.5 OFF
/headamp/037 +12.5 OFF
/headamp/038 +8.0 OFF
/headamp/039 +11.0 OFF
/headamp/040 +8.5 OFF
/headamp/041 +8.5 OFF
/headamp/042 +26.5 ON
/headamp/043 +35.5 ON
/headamp/044 +33.5 ON
/headamp/045 +33.5 ON
/headamp/046 +41.0 ON
/headamp/047 +32.5 ON
/headamp/048 +19.0 OFF
/headamp/049 +42.5 OFF
/headamp/050 +34.0 OFF
/headamp/051 +38.5 OFF
/headamp/052 +38.5 OFF
/headamp/053 +60.0 OFF
/headamp/054 +34.5 ON
/headamp/055 +34.5 ON
/headamp/056 +0.0 OFF
/headamp/057 +0.0 OFF
/headamp/058 +0.0 OFF
/headamp/059 +0.0 OFF
/headamp/060 +0.0 OFF
/headamp/061 +0.0 OFF
/headamp/062 +0.0 OFF
/headamp/063 +0.0 OFF
/headamp/064 +0.0 OFF
/headamp/065 +0.0 OFF
/headamp/066 +0.0 OFF
/headamp/067 +0.0 OFF
/headamp/068 +0.0 OFF
/headamp/069 +0.0 OFF
/headamp/070 +0.0 OFF
/headamp/071 +0.0 OFF
/headamp/072 +0.0 OFF
/headamp/073 +0.0 OFF
/headamp/074 +0.0 OFF
/headamp/075 +0.0 OFF
/headamp/076 +0.0 OFF
/headamp/077 +0.0 OFF
/headamp/078 +0.0 OFF
/headamp/079 +0.0 OFF
/headamp/080 +43.5 OFF
/headamp/081 +43.5 OFF
/headamp/082 +51.5 OFF
/headamp/083 +51.5 OFF
/headamp/084 +60.0 OFF
/headamp/085 +60.0 OFF
/headamp/086 +0.0 OFF
/headamp/087 -3.5 OFF
/headamp/088 +0.0 OFF
/headamp/089 +0.0 OFF
/headamp/090 +0.0 OFF
/headamp/091 +0.0 OFF
/headamp/092 +0.0 OFF
/headamp/093 +0.0 OFF
/headamp/094 +0.0 OFF
/headamp/095 +0.0 OFF
/headamp/096 +0.0 OFF
/headamp/097 +0.0 OFF
/headamp/098 +0.0 OFF
/headamp/099 +0.0 OFF
/headamp/100 +0.0 OFF
/headamp/101 +0.0 OFF
/headamp/102 +0.0 OFF
/headamp/103 +0.0 OFF
/headamp/104 +0.0 OFF
/headamp/105 +0.0 OFF
/headamp/106 +0.0 OFF
/headamp/107 +0.0 OFF
/headamp/108 +0.0 OFF
/headamp/109 +0.0 OFF
/headamp/110 +0.0 OFF
/headamp/111 +0.0 OFF
/headamp/112 +0.0 OFF
/headamp/113 +0.0 OFF
/headamp/114 +0.0 OFF
/headamp/115 +0.0 OFF
/headamp/116 +0.0 OFF
/headamp/117 +0.0 OFF
/headamp/118 +0.0 OFF
/headamp/119 +0.0 OFF
/headamp/120 +0.0 OFF
/headamp/121 +0.0 OFF
/headamp/122 +0.0 OFF
/headamp/123 +0.0 OFF
/headamp/124 +0.0 OFF
/headamp/125 +0.0 OFF
/headamp/126 +0.0 OFF
/headamp/127 +0.0 OFF
```
