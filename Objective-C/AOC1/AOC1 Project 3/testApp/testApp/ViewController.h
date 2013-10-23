//
//  ViewController.h
//  testApp
//
//  Created by Nathan Buth on 8/16/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface ViewController : UIViewController
{

}

- (int)Add:(NSInteger)addIntegerOne addIntegerTwo:(NSInteger)addIntegerTwo;
- (BOOL)Compare: (NSInteger)compareIntegerOne compareIntegerTwo:(NSInteger)compareIntegerTwo;
- (NSString *)Append:(NSString *)appendNSStringOne appendNSStringTwo:(NSString *)appendNSStringTwo;
- (void)DisplayAlertWithString:(NSString *)alertString customTitle:(NSString *)customTitle;

@end
