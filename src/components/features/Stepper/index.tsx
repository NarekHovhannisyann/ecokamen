import { FC, useState } from 'react';
import { Box, Step, StepButton, Stepper, Typography } from '@material-ui/core';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';

interface IProps {
  activeStep: number;
  completed: { [key: number]: boolean };
  onChange: (key: number) => void;
}

const steps = [
  { label: 'Покупатель', icon: PermIdentityIcon },
  { label: 'Доставка', icon: LocalShippingOutlinedIcon },
  { label: 'Оплата', icon: AccountBalanceWalletOutlinedIcon },
  { label: 'Покупка этих товаров', icon: ShoppingCartIcon },
];

const StepperComponent: FC<IProps> = ({ activeStep, completed, onChange }) => {
  return (
    <Stepper
      nonLinear
      activeStep={activeStep}
      style={{ width: '100%', marginBottom: 40 }}
    >
      {steps.map((step, index: number) => (
        <Step
          color="inherit"
          key={step.label}
          completed={completed[index]}
          active={activeStep === index}
        >
          <StepButton
            icon={
              <step.icon
                sx={{
                  color: completed[index]
                    ? 'green'
                    : activeStep === index
                    ? '#3f51b5'
                    : 'black',
                  width: 40,
                  height: 40,
                }}
              />
            }
            onClick={() => onChange(index)}
          >
            <Typography
              style={{
                color: completed[index]
                  ? 'green'
                  : activeStep === index
                  ? '#3f51b5'
                  : 'black',
              }}
            >
              {step.label}
            </Typography>
          </StepButton>
        </Step>
      ))}
    </Stepper>
  );
};

export default StepperComponent;
