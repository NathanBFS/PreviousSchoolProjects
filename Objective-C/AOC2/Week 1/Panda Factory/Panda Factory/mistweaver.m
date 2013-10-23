//
//  mistweaver.m
//  testApp
//
//  Created by Nathan Buth on 9/27/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import "mistweaver.h"

@implementation mistweaver

@synthesize averageDPS, group, timeHealing,timeAttacking;

-(id)init
{
    self = [super init];
    if (self != nil)
    {
        [self setAverageDPS:1000];
        [self setGroup:MEDIUM];
        [self setTimeHealing:0];
        [self setTimeAttacking:0];
        NSLog(@"Mistweaver Pandaren Monk Created!");
    }
    return self;
}

-(void)calculateAverageDPS
{
    if (groupSize == SMALL){
        [self setAverageDPS:(averageDPS - 10 + (timeAttacking * 100 - timeHealing *100))];
    } else if (groupSize == MEDIUM){
        [self setAverageDPS:(averageDPS - 15 + (timeAttacking * 100 - timeHealing *100))];
    } else if (groupSize == LARGE){
        [self setAverageDPS:(averageDPS - 20 + (timeAttacking * 100 - timeHealing *100))];
    }
    NSLog(@"Mistweaver Monk does %i DPS.", self.averageDPS);
}

@end
