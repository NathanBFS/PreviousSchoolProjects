//
//  brewmaster.m
//  testApp
//
//  Created by Nathan Buth on 9/27/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import "brewmaster.h"

@implementation brewmaster

@synthesize averageDPS, alcoholLevel, damagePerAL;

-(id)init
{
    self = [super init];
    if (self != nil)
    {
        [self setAverageDPS:1000];
        [self setAlcoholLevel: 0];
        [self setDamagePerAL: 1000];
        NSLog(@"Brewmaster Pandaren Monk Created!");
    }
    return self;
}

-(void)calculateAverageDPS
{
    [self setAverageDPS:(averageDPS + (alcoholLevel * damagePerAL))];
    NSLog(@"Brewmaster Monk does %i DPS.", self.averageDPS);
}

@end
