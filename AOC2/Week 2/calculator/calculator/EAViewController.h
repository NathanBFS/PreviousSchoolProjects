//
//  EAViewController.h
//  calculator
//
//  Created by Nathan Buth on 10/5/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface EAViewController : UIViewController
{
    IBOutlet UILabel *numberInput;
    IBOutlet UISegmentedControl *changeBackground;
    int backColor;
}

typedef enum
{
    MARBLEWHITE,
    SLATEBLUE,
    AGATEGREEN
}backColor;

@property (nonatomic) BOOL numberPressed;
@property (nonatomic) int firstInput;
@property (nonatomic) int secondInput;
@property (nonatomic, copy) NSString *calculation;
@property (weak, nonatomic) IBOutlet UILabel *numberInput;


-(void)DisplayAlertWithString:(NSString *)alertString customTitle:(NSString *)customTitle;
-(IBAction)number:(UIButton *)sender;
-(IBAction)operators:(id)sender;
-(IBAction)equals;
-(IBAction)clear;
-(IBAction)backgroundChange:(id)sender;

@end
