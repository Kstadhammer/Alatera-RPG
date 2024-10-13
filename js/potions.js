export const potions = [
    { name: 'minor health potion', price: 20, restoreHealth: 25 },
    { name: 'standard health potion', price: 40, restoreHealth: 50 },
    { name: 'major health potion', price: 60, restoreHealth: 100 },
    { name: 'minor mana potion', price: 30, restoreMana: 15 },
    { name: 'standard mana potion', price: 50, restoreMana: 30 },
    { name: 'major mana potion', price: 70, restoreMana: 60 },
    { name: 'elixir of vitality', price: 100, restoreHealth: 75, restoreMana: 35 },
    { name: 'potion of regeneration', price: 80, restoreHealth: 10, effect: 'regenerate 5 health per turn for 5 turns' },
    { name: 'potion of clarity', price: 90, restoreMana: 20, effect: 'regenerate 3 mana per turn for 5 turns' },
    { name: 'berserker brew', price: 110, restoreHealth: 30, effect: 'increase attack by 20% for 3 turns' },
    { name: 'shield tonic', price: 110, restoreHealth: 30, effect: 'increase defense by 20% for 3 turns' },
    { name: 'elixir of fortune', price: 150, effect: 'increase gold and XP gained by 50% for the next battle' }
  ];