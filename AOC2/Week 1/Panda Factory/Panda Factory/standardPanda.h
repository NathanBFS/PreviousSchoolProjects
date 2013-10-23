//
//  standardPanda.h
//  testApp
//
//  Created by Nathan Buth on 9/27/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface standardPanda : NSObject
{
    int pandaEnum;
}
typedef enum {
    BREWMASTER,
    MISTWEAVER,
    WINDWALKER
} pandaEnum;

@property int averageDPS;
@property NSString *consumableInventory;
@property NSString *specialization;

-(id)init;

-(void)calculateAverageDPS;

@end
