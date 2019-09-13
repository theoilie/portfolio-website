export interface Section {
    onEnter(): void; // When the user scrolls into this section
    onExit(): void; // When the user scrolls out of this section
    getHeight(): number; // The height on the screen that this section occupies
}