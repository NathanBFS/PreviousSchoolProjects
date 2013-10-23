//
//  standardPanda.m
//  testApp
//
//  Created by Nathan Buth on 9/27/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import "standardPanda.h"

@implementation standardPanda

@synthesize averageDPS, consumableInventory, specialization;

-(id)init
{
    self = [super init];
    if (self != nil)
    {
        [self setAverageDPS:100];
        [self setConsumableInventory:nil];
        [self setSpecialization:nil];
    }
    return self;
}

-(void)calculateAverageDPS
{
    //[self setAverageDPS:( averageDPS * 10)];
    NSLog(@"Panda does %i DPS.", self.averageDPS);
}

@end
