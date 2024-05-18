export function getInitials(name: string) {
    const hasTokens = name.indexOf(" ") !== -1;
    return (
        name.substring(0, hasTokens ? 1 : 2) +
        (hasTokens ? name.charAt(name.lastIndexOf(" ") + 1) : "")
    );
}
