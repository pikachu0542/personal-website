import { SkillCategory } from "@/types";
import { Tag, TagList } from "@/components/ui/Tag";

export function SkillGroup({ category }: { category: SkillCategory }) {
  return (
    <article className="flex flex-col gap-5 rounded-[28px] border border-line bg-card p-8">
      <div className="font-mono text-[13px] text-muted">{category.name.toLowerCase()}</div>
      <TagList>
        {category.skills.map((s) => (
          <Tag key={s.name}>{s.name}</Tag>
        ))}
      </TagList>
    </article>
  );
}