//
//  ViewController.h
//  Technomancer Mobile
//
//  Created by Nathan Buth on 10/25/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface ViewController : UIViewController
{
    IBOutlet UILabel *heading;
    IBOutlet UITextView *description;
    IBOutlet UILabel *directions;
    IBOutlet UILabel *swipeArea;
    
    UISwipeGestureRecognizer *leftSwiper;//Left swipe gesture
    UISwipeGestureRecognizer *rightSwiper;//Right swipe gesture
}
@end
