import { RegularExpressionLiteral, SyntaxKind } from 'ts-simple-ast';

import { NodeCompiler } from '../NodeCompiler';
import { ScriptBuilder } from '../sb';
import { VisitOptions } from '../types';

export default class RegularExpressionLiteralCompiler extends NodeCompiler<
  RegularExpressionLiteral
> {
  public readonly kind: SyntaxKind = SyntaxKind.RegularExpressionLiteral;
  public visitNode(
    sb: ScriptBuilder,
    expr: RegularExpressionLiteral,
    options: VisitOptions,
  ): void {
    sb.reportUnsupported(expr);
  }
}
