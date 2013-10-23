//
//  pandaFactory.h
//  testApp
//
//  Created by Nathan Buth on 9/27/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "standardPanda.h"
#import "brewmaster.h"
#import "mistweaver.h"
#import "windwalker.h"

@interface pandaFactory : NSObject

+(standardPanda *)createNewPanda: (int)pandaType;

@end
