import styled from "styled-components";
import { Media } from "ui";
import { motion } from "framer-motion";

export const StyledMovieList = styled(motion.ul)`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  ${Media.LG} {
    gap: 32px;
  }
  ${Media.SM} {
    gap: 32px 0;
    justify-content: center;
  }
`;
