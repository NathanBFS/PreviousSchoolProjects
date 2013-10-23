//
//  MyMapAnnotation.m
//  testApp
//
//  Created by Nathan Buth on 11/9/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import "MyMapAnnotation.h"

@implementation MyMapAnnotation
@synthesize title, coordinate;

-(id)initWithTitle:(NSString *)text coord:(CLLocationCoordinate2D)coord
{
    if((self = [super init]))
    {
        title = text;
        coordinate = coord;
    }
    return self;
}
@end
