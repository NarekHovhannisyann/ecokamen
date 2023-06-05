import { FC } from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';

import styles from './styles.module.scss';

interface IProps {
  title: string;
  imageHref: string;
  price: string;
  thickness: string;
  quantity: number;
}

const PurchaseOrderCard: FC<IProps> = ({
  title,
  imageHref,
  price,
  thickness,
  quantity,
}) => {
  return (
    <Box className={styles.card}>
      <Image width={100} height={100} src={imageHref} alt="stoneImage" />
      <Box className={styles.stoneDetails}>
        <Typography className={styles.title}>{title}</Typography>
        <Box className={styles.stoneInfo}>
          <Box>
            <Box className={styles.infoContainer}>
              <Typography className={styles.infoLabel}>Толщина:</Typography>
              <Typography className={styles.info}>{thickness}мм</Typography>
            </Box>
            <Box className={styles.infoContainer}>
              <Typography className={styles.infoLabel}>
                цена за 1 м<sup>2</sup>:
              </Typography>
              <Typography className={styles.info}>{price}руб</Typography>
            </Box>
            <Box className={styles.infoContainer}>
              <Typography className={styles.infoLabel}>Количество:</Typography>
              <Typography className={styles.info}>{quantity}</Typography>
            </Box>
          </Box>
          <Box className={styles.purchaseInfo}>
            <Typography className={styles.totalPrice}>
              {+quantity * +price}руб
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PurchaseOrderCard;
