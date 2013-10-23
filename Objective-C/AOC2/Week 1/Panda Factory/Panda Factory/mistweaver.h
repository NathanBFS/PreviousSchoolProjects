//
//  mistweaver.h
//  testApp
//
//  Created by Nathan Buth on 9/27/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import "standardPanda.h"

@interface mistweaver : standardPanda

{
    int groupSize;
}

typedef enum {
    SMALL,
    MEDIUM,
    LARGE
} groupSize;

@property int group;
@property float timeHealing;
@property float timeAttacking;


@end
