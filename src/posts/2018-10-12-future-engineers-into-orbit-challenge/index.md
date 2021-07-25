---
layout:     post
title:      Into Orbit - Future Engineers
subtitle:   Kicking off the Future Engineers Projects
comments:   true
date:       2018-10-12 15:30:00
author:     Mark Roxberry
excerpt:    Coordinating the Future Engineers Projects with the First Lego League Into Orbit Challenge.
tags:       [future engineers, robotics, games, iot]
categories:
    - ai
    - robotics
    - fll
postimage: 
    src: "post.png"
    alt: "main post image"
featured:   true
---

# Future Engineers - Into Orbit Project Challenge

The Future Engineers Team is developing a modular, deployable, autonomous defense system to protect [Into Orbit](https://firstinspiresst01.blob.core.windows.net/fll/2019/FIRST-FLL-2018-19-ChallengeGuide-Letter.pdf) missions, in space and on planet outposts, from direct and indirect threats.  

The Future Engineers - Expeditionary Defense System (FE-EDS) will utilize mesh sensor technology, artificial intelligence and autonomous robotic platforms to provide persistent intelligent, surveillance and reconnaissance (Persistent ISR) capability from subsurface to space.

## Expeditionary Defense System

### Requirements

1. Identification Friend or Foe (IFF)
1. Rapid Response
1. Continuous Intelligence and Verification
1. Mobile Redundant Operations Nodes (Decentralized Mesh)

### Components

1. Autonomous Space Defense Vehicle (Robotics)
1. Intelligent Mission Management and Tasking (AI)
1. Expeditionary Sensor Grid Nodes (IoT)
1. Tactical Defense Simulator and Trainer (Game / AI)
1. Autonomous Space Reconnaissance Vehicle (Robotics Tracks)

### Prototype Testing

#### FOE Penetration

1. Train IMMT to identify FOE (TDST, IMMT) - e.g. Friend ASRV will send codes to ESG nodes, FOE will not.
1. Identify FOE Simulation (TDST, ESG, IMMT)
1. Deploy ASDV (IMMT, ASDV)
1. ASDV marks home coordinates (ESG, ASDV)
1. ASDV moves to FOE coordinates (ESG, ASDV)
1. ASDV captures FOE (ASDV)

### Projects

#### Autonomous Space Defense Vehicle (ASDV)

* Interception / Intervention
* Mobile sensor data acquisition
* Autonomous Safety Protocol

Engineer: RC

#### Intelligent Mission Management and Tasking AI (IMMT)

* Friend or Foe intrusion determination
* Coordinate instructions to ESG, ASDVs
  * Responses can include deploying ASDVs for rescue or intervention
  * IMMT can broadcast instructions to nodes on ESG for containment, evacuation, ...
* Assimilate directives, Friend or Foe models from TDST and instructions for response

Engineer: GM

#### Expeditionary Sensor Grid (ESG)

* Develop Sensor Node (2x2, Sensor Tower)
* Needs to be mobile
* Needs to communicate with both IMMT, ASDVs
* Needs to scan all activity and send to IMMT for Friend Foe
* Needs to give location data to IMMT, ASDVs

Engineer: BF

#### Tactical Defense Simulator and Trainer (TDST)

* Simulate EDS Code verification - FOE
  * Friend or FOE - invader broadcasts code
  * ESG gets code and sends to IMMT
  * ESG receives instructions from IMMT
  * ESG sends instructions to ASDV
  * ASDVs responds sends information to ESG
  * ESG sends information to IMMT
  * IMMT determines course of action
    * Containment
    * Evacuation

Engineer: QM

#### Autonomous Space Reconnaissance Vehicle (ASRV)

* Basic Mindstorms driving base and sensor rig.  We will use ASRVs to test the EDS.
* Send Codes to ESG for Friend identification.

Engineer(s): KL, ML

### Roadmap

### October 2018

1. Project Workshop (10/19)
1. Task 1 (10/26)

### November 2018

1. No class on 11/2
1. Task 2 (11/9)
1. Task 3 (11/16)
1. No class on 11/23
1. Task 4 (11/30)

### December 2018

1. Task 5 (12/7)
1. Task 6 (12/14)
1. Tasks 7-8 (12/21) (11:30 - 1:30)

### January 2019

1. No class on 1/4
1. Integration Testing 1 (1/11)
1. Integration Testing 2 (1/18)
1. Integration Testing 3 (1/25)

### February 2019

1. FE-EDS Demo Phase 1 (2/1) (11:30 - 1:30)
1. Data Logging (2/8)
1. Data Logging (2/15)
1. Data Logging (2/22)

### March 2019

1. FE-EDS Phase 2 Project Workshop (3/1) (11:30 - 1:30)
1. ... (3/8)
1. [Pi Day Belated (Applied Geometry)](https://www.teachengineering.org/activities/view/nyu_robotgo_activity1) (3/15)
1. ... (3/22)
1. ... (3/29)

### April 2019

1. No class on 4/5
1. ... (4/12)
1. No class on 4/19
1. No class on 4/26

### May 2019

1. ... (5/3) (11:30 - 1:30)
1. ... (5/10)
1. ... (5/17)
1. No class on 5/24
1. ... (5/31)

### June 2019

1. ... (6/7) (11:30 - 1:30)
1. Last Day 6/14

## References

[Into Orbit Project Challenge](https://firstinspiresst01.blob.core.windows.net/fll/2019/FIRST-FLL-2018-19-ChallengeGuide-Letter.pdf)