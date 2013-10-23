//
//  MyMapAnnotation.h
//  testApp
//
//  Created by Nathan Buth on 11/9/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <MapKit/MapKit.h>

@interface MyMapAnnotation : NSObject <MKAnnotation>
{
    NSString *title;
    
    CLLocationCoordinate2D coordinate;
}

-(id)initWithTitle:(NSString*)text coord:(CLLocationCoordinate2D)coord;

@property (nonatomic, copy) NSString *title;
@property (nonatomic, readonly) CLLocationCoordinate2D coordinate;

@end
