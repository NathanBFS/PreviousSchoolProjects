//
//  windwalker.m
//  testApp
//
//  Created by Nathan Buth on 9/27/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import "windwalker.h"

@implementation windwalker

@synthesize averageDPS, energyLevel, chiLevel, beastness;

-(id)init
{
    self = [super init];
    if (self != nil)
    {
        [self setAverageDPS:1000];
        [self setEnergyLevel:0];
        [self setChiLevel:0];
        [self setBeastness:1000];
        NSLog(@"Windwalker Pandaren Monk Created!");
    }
    return self;
}

-(void)calculateAverageDPS
{
    [self setAverageDPS:(averageDPS + beastness + (chiLevel * energyLevel))];
    NSLog(@"Windwalker Monk does %i DPS.", self.averageDPS);
}


@end
