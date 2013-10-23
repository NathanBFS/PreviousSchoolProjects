//
//  listDetails.m
//  testApp
//
//  Created by Nathan Buth on 11/15/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import "listDetails.h"

@implementation listDetails

-(id)initWithName:(NSString*)videoTitle theType:(NSString*)description
{
    if ((self = [super init]))
    {
        Name = videoTitle;
        Type = description;
    }
    return self;
}

@end
