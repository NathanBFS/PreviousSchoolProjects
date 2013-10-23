//
//  ViewController.h
//  calculator
//
//  Created by Nathan Buth on 10/4/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface ViewController : UIViewController
{
    IBOutlet UILabel *numberInput;
    IBOutlet UISwitch *onSwitch;
    IBOutlet UIButton *iButton;
    IBOutlet UISegmentedControl *changeBackground;
    int backgroundColor;
}

typedef enum
{
    MARBLEWHITE,
    SLATEBLUE,
    AGATEGREEN
}backgroundColor;

@property (nonatomic) BOOL numberPressed;
@property (nonatomic) int firstInput;
@property (nonatomic) int secondInput;
@property (nonatomic, copy) NSString *calculation;
@property (weak, nonatomic) IBOutlet UILabel *numberInput;


-(void)DisplayAlertWithString:(NSString *)alertString customTitle:(NSString *)customTitle;
-(IBAction)powerSwitch:(id)sender;
-(IBAction)infoButton:(id)sender;
-(IBAction)number:(UIButton *)sender;
-(IBAction)operators:(id)sender;
-(IBAction)equals;
-(IBAction)clear;
-(IBAction)backgroundChange:(id)sender;
@end
