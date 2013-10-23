//
//  listDetails.h
//  testApp
//
//  Created by Nathan Buth on 11/15/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface listDetails : NSObject
{
    NSString *Name;
    NSString *Type;

}

-(id)initWithName:(NSString*)videoTitle theType:(NSString*)description;

@end
