"use client";
import React from "react";
import { Cover } from "@/components/ui/cover";

const advancedComposition = [
  {
    category: "Advanced Harmony & Chord Progressions",
    details: `
        (1) Extended & Altered Chords: 7th, 9th, 11th, 13th chords add depth.
        (2) Modal Interchange: Borrow chords from parallel modes (e.g., using iv from C minor in C major).
        (3) Chromaticism & Secondary Dominants: Temporary modulations using chromatic shifts.
      `
  },
  {
    category: "Counterpoint & Voice Leading",
    details: `
        (1) Species Counterpoint: Independent yet harmonically pleasing melodies.
        (2) Avoid Parallel Fifths & Octaves: Maintain independence between lines.
        (3) Imitative Counterpoint: Fugue and canon techniques for layered melodies.
      `
  },
  {
    category: "Orchestration & Instrumentation",
    details: `
        (1) Timbre Layering: Combine instruments for unique textures (e.g., strings + woodwinds).
        (2) Register & Range Considerations: Instruments sound different in high vs. low ranges.
        (3) Divisi & Doubling: Split string sections or double brass for powerful cinematic effects.
      `
  },
  {
    category: "Advanced Rhythm & Meter",
    details: `
        (1) Polyrhythms & Cross-Rhythms: Example: 3 against 4 rhythmic structures.
        (2) Changing Time Signatures: Alternating between 7/8, 5/8, and 4/4.
        (3) Syncopation & Groove: Emphasizing off-beats for rhythmic interest.
      `
  },
  {
    category: "Motivic Development & Thematic Transformation",
    details: `
        (1) Inversion: Flipping a melody upside-down.
        (2) Retrograde: Playing the melody backward.
        (3) Diminution & Augmentation: Changing note lengths for variation.
        (4) Leitmotifs: Assigning musical themes to characters or ideas.
      `
  },
  {
    category: "Advanced Modulation Techniques",
    details: `
        (1) Common Tone Modulation: Using a sustained note to transition to a new key.
        (2) Pivot Chord Modulation: Smooth key changes using shared chords.
        (3) Chromatic Modulation: Unexpected key shifts via chromatic movement.
        (4) Planing: Moving entire chord shapes up or down for modern harmonic shifts.
      `
  },
  {
    category: "Electronic & Experimental Techniques",
    details: `
        (1) Microtonality: Using quarter tones & alternative tuning systems.
        (2) Atonality & Serialism: Composing without a tonal center using 12-tone rows.
        (3) Sound Design & Extended Techniques: Prepared piano, brass effects, and electronic textures.
        (4) Textural Composition: Clusters of sound instead of traditional melody/harmony.
      `
  },
  {
    category: "Film Scoring & Emotional Storytelling",
    details: `
        (1) Underscoring Techniques: Pedal tones & suspensions for building tension.
        (2) Hit Points & Syncing to Picture: Music aligned with key visual moments.
        (3) Diatonic Planing: Parallel chords for uplifting or dreamlike sequences.
      `
  },
  {
    category: "Jazz & Contemporary Techniques",
    details: `
        (1) Chord Substitutions: Using tritone substitutions for harmonic variety.
        (2) Slash Chords & Upper Structures: Example: C/E for tonal ambiguity.
        (3) Quartal & Quintal Harmony: Chords built in 4ths or 5ths for modern sounds.
      `
  },
  {
    category: "Structural Forms & Composition Approaches",
    details: `
        (1) Through-Composed Music: Continuous development without repeating sections.
        (2) Palindrome Structures: Pieces that sound the same forward and backward.
        (3) Golden Ratio & Fibonacci Sequences: Using mathematical patterns in music structure.
      `
  }
];

function AdvancedComposition() {
  return (
    <div className="py-32 bg-gray-900">
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">Advanced Composition</h1>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {advancedComposition.map((object) => (
            <div key={object.category} className="flex justify-center">
              <Cover>
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">{object.category}</p>
                  <p className="text-sm mb-4 text-neutral-200 dark:text-neutral-200 flex-grow whitespace-pre-line">{object.details}</p>
                </div>
              </Cover>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdvancedComposition;