using System.Collections.Generic;

namespace CPLXENDC {
    abstract class SyntaxNode {
        public abstract SyntaxKind Kind { get; }
        public abstract IEnumerable<SyntaxNode> GetChildren();
    }
}