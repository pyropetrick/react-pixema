import { Color } from "config";
import styled from "styled-components";
import { Media } from "ui";
import { typography } from "../../ui/typography";

export const StyledProfile = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  ${Media.MD} {
    display: none;
  }
`;

export const Name = styled.h6`
  ${typography.s3}
`;
export const ProfileIcon = styled.div`
  ${typography.h3};
  padding: 10px 15px;
  border-radius: 10px;
  background-color: ${Color.PRIMARY};
`;
