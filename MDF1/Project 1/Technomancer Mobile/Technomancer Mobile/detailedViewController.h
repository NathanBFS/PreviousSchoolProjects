//
//  detailedViewController.h
//  testApp
//
//  Created by Nathan Buth on 10/25/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface detailedViewController : UIViewController
{
    IBOutlet UILabel *heading;
    IBOutlet UILabel *backSwipe;
    IBOutlet UITextView *gadgetDetails;
    
    UISwipeGestureRecognizer *leftSwiper;//Left swipe gesture
    UISwipeGestureRecognizer *rightSwiper;//Right swipe gesture
}
@end
