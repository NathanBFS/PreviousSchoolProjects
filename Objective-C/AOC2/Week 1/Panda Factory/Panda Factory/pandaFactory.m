//
//  pandaFactory.m
//  testApp
//
//  Created by Nathan Buth on 9/27/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import "pandaFactory.h"

@implementation pandaFactory

+(standardPanda *)createNewPanda: (int)pandaType
{
    if (pandaType == BREWMASTER) {
        return [[brewmaster alloc] init];
    } else if (pandaType == MISTWEAVER) {
        return [[mistweaver alloc] init];
    } else if (pandaType == WINDWALKER) {
        return [[windwalker alloc] init];
    } else return nil;
}

@end
