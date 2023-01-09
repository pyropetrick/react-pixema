import styled from "styled-components";
import { Media } from "ui";
import { fallback } from "assets";
import { Color } from "config";
import { motion } from "framer-motion";

export const FavoriteList = styled(motion.ul)`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  ${Media.MD} {
    gap: 32px;
  }
`;
