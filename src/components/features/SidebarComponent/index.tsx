import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Box, MenuItem, Select, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import styles from './styles.module.scss';

interface IProps {
  categories: { title: string; imageHref: string; link: string }[];
}

const SidebarComponent: FC<IProps> = ({ categories }) => {
  const theme = useTheme();
  const router = useRouter()
  const isMobile = useMediaQuery(theme.breakpoints.up('lg'));
  console.log(router.query)
console.log(isMobile)
  if (!isMobile) {
    return (
      <Select className={styles.select} value={router.query.category}>
        {categories.map(({ link, title }) => (
          <MenuItem key={title} value={title} className={styles.category}>
            <Link href={link}>{title}</Link>
          </MenuItem>
        ))}
      </Select>
    );
  }

  return (
    <Box className={styles.categories}>
      {categories.map(({ link, title }) => (
        <Link key={title} className={styles.category} href={link}>
          {title}
        </Link>
      ))}
    </Box>
  );
};

export default SidebarComponent;
