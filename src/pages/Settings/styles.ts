import styled from "styled-components";
import { Color } from "config";
import { InputCSS, Media, typography } from "ui";

interface IProps {
  error?: boolean;
}

export const StyledFormSettings = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1186px;
`;

export const FormCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  border-radius: 10px;
  padding: 40px;
  margin-bottom: 40px;
  background-color: ${Color.BLOCK_BG};
  ${Media.SM} {
    margin-bottom: 32px;
  }
`;

export const Input = styled.input`
  ${InputCSS};
  border-color: ${(props: IProps) => props.error && Color.ERROR};
`;

export const Title = styled.h2`
  ${typography.h2};
  margin-bottom: 16px;
`;
export const DescSpan = styled.span`
  color: ${Color.LIGHT};
  ${typography.b}
`;
export const GroupButton = styled.div`
  justify-self: end;
  display: flex;
  gap: 40px;
`;
