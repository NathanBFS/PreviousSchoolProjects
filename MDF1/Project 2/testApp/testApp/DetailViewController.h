//
//  DetailViewController.h
//  testApp
//
//  Created by Nathan Buth on 11/2/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface DetailViewController : UIViewController
{
    IBOutlet UILabel *detail;
    IBOutlet NSString *textSelected;
}

@property (nonatomic, retain) UILabel *detail;
@property (nonatomic, retain) NSString *textSelected;

-(id)initWithTextSelected:(NSString *) text;

@end
